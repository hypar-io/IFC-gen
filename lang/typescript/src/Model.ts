import { BaseIfc } from "./BaseIfc";
let XmlWriter = require("xml-writer")

export class Model {

    private _currentFileId = 1
    private _instances : Map<string, BaseIfc> = new Map<string,BaseIfc>()

    /**
     * Add a BaseIfc to the Model.
     * @param instance The BaseIfc instance to add.
     */
    addInstance(instance: BaseIfc) {
        if(!this._instances.has(instance.id)) {
            this._instances.set(instance.id, instance)
            instance.fileId = this._currentFileId
            this._currentFileId ++
        }
    }

    /**
     * Remove a BaseIfc instance from the Model.
     * @param instance The BaseIfc instance to remove.
     */
    removeInstance(instance: BaseIfc) {
        if(this._instances.has(instance.id)) {
            this._instances.delete(instance.id)
        }
    }

    /**
     * Write the Model to XML.
     */
    toXML() : string {
        let xml = ""

        let xw = new XmlWriter(true);
        xw.startDocument()

        this._instances.forEach(instance => {
            xml += instance.toXML(xw)
        })

        xw.endDocument()
        return xw.toString()
    }

    /**
     * Write the model to STEP.
     */
    toSTEP() : string {
        let step = ""

        this._instances.forEach(instance => {
            step += instance.toSTEP()+"\n"
        });

        return step
    }
}