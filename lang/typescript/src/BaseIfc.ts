import * as uuid from "uuid"
//import { Select } from "./Select";

export abstract class BaseIfc {

    /**
     * The unique identifier for the isntance.
     */
    public id : string

    /**
     * The identifier used in STEP and XML files.
     * This is not a stable or unique identifier.
     */
    public fileId : number

    constructor() {
        this.id = uuid.v4()
    }

    /**
     * Write the instance to STEP.
     */
    toSTEP() : string {
        let ifcClass : string = this.constructor.name.toUpperCase();
        return `#${this.fileId} = ${ifcClass}(${this.getStepParameters()})`
    }

    /**
     * Write the instance to XML.
     * @param xw The XMLWriter used to write to XML.
     */
    toXML(xw: any) : void {
        
        let noSerialize = ["id","stepId"]

        let properties = Object.getOwnPropertyNames(this)
        let self: any = this
        let values = Object.keys(this).map((key)=>self[key.toString()])

        xw.startElement(this.constructor.name)
        xw.writeAttribute("id", `i${this.id}`)

        for(let i=0; i<properties.length; i++) {

            let propertyName = properties[i]
            let value = values[i]

            if(noSerialize.find(v=>v === propertyName)) {
                continue
            }

            xw.startElement(propertyName)

            if(Array.isArray(value)) {
                let arr: any = value
                for(let j=0; j<arr.length; j++) {
                    if(arr[j] instanceof BaseIfc) {
                        arr[j].toXML(xw)
                    } else {
                        xw.text(arr[j].toString())
                    }
                }
            } else if(value instanceof BaseIfc) {
                if(value) {
                    value.toXML(xw)
                }
            } else {
                if(value) {
                    xw.text(value.toString())
                }
            }

            xw.endElement()
        }

        xw.endElement()
    }

    static toStepValue(value: any) : string {
        if(value == null) {
            return "$"
        } else if (value instanceof BaseIfc){
            if(value.fileId) {
                return `#${value.fileId}`
            } else {
                //throw new Error("An instance of BaseIfc was referenced but did not have a file identifier.")
                return "XXXXXX"
            }
        } else if(typeof value === "string") {
            if(value[0] === ".") {
                // Treat this as an enum
                return `${value}`
            }
            return `'${this.encode(value)}'`
        } else if (typeof value === "number") {
            if(value === 0.0) {
                return value.toPrecision(1)
            }
            if(value % 1 == 0) {
                return value.toString()
            }
            return `${value.toExponential().toUpperCase()}`
        } else if (typeof value === "boolean") {
            let b: boolean = value
            return  b === true? ".T." : ".F."
        } else if (Array.isArray(value)) {
            const values = value.map(v=>{return BaseIfc.toStepValue(v)})
            return `(${values.join()})`
        } else {
            throw new Error(`I found the value ${value}, and don't know how to serialize it.`)
        }
    }

    // http://www.steptools.com/stds/step/IS_final_p21e3.html#clause-6-4-3
    static encode(str: string): string
    {
        if(str === "") {
            return "\""
        }

        let result: string = "";
        let length: number = str.length;
        for (let icounter = 0; icounter < length; icounter++)
        {
            let c: string = str[icounter];
            if (c.endsWith("\r") || c.endsWith("\r\n") || c.endsWith("\n"))
            {
                continue;
            }
            if (c === "'")
                result += "\"";
            else
            {
                // Convert the character to its UTF-16 code unit.
                let i: number = c.charCodeAt(icounter);
                if (i < 32 || i > 126)
                    result += "\\X2\\" + this.toFourCharacters(i.toString(16)).toUpperCase() + "\\X0\\";
                else
                    result += c;
            }
        }
        return result;
    }

    private static toFourCharacters(str: string) {
        let buf = ["0","0","0","0"]
        for (let i=str.length-1; i>=0; i--) {
            buf[i+str.length] = str[i] // assign with proper offset
        }
        return buf.join("")
    }

    getStepParameters() : string {
        throw new Error("getStepParameters() should always be overridden in extension classes.")
    }
}