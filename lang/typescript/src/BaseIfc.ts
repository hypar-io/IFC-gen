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
        xw.writeAttribute("id", `i{this.id}`)

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

    static toStepValue(value: any, isSelectOption : boolean = false) : string {
        if(!value) {
            return "$"
        } else if(value instanceof String) {
            return `'${value}'`
        } else if (value instanceof Number) {
            return `${value}`
        } else if (value instanceof Boolean) {
            let b: Boolean = value
            return  b === true? "T" : "F"
        } else if (value.hasOwnProperty("wrappedValue") ) {

            // If the fileId is set, than its an instance
            // storead on the model. Return its reference.
            if(value.fileId) {
                return `#${value.fileId}`
            }
            // Otherwise, return whatever is required to construct
            // the item inline.
            return BaseIfc.toStepValue(value.wrappedValue)
        } else if (Array.isArray(value)) {
            if(value.length == 0) {
                return "$"
            }
            return `(${value.map(v=>{BaseIfc.toStepValue(v)})})`
        } else if (value instanceof BaseIfc){
            return `#${value.fileId}`
        }
    }

    getStepParameters() : string {
        return ""
    }
}