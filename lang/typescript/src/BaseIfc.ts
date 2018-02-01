import * as uuid from "uuid"

export abstract class BaseIfc {
    public id : string
    public stepId : number

    constructor() {
        this.id = uuid.v4()
    }

    toSTEP() : string {
        let ifcClass : string = this.constructor.name.toUpperCase();
        return `${this.stepId} = ${ifcClass}(${this.getStepParameters()})`
    }

    toXML(xw: any) : void {
        
        let noSerialize = ["id","stepId"]

        let properties = Object.getOwnPropertyNames(this)
        let self: any = this
        let values = Object.keys(this).map((key)=>self[key.toString()])

        xw.startElement(this.constructor.name)
        xw.writeAttribute("id", this.id)

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

    toStepValue(value: any, isSelectOption : boolean = false) : string {
        return `${this.stepId}`
    }

    getStepParameters() : string {
        return ""
    }
}