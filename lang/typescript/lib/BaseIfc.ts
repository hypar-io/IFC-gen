export abstract class BaseIfc
{
    private _id : string
    private _stepId : string

    constructor() {
        this._id = "XXXXX"
    }

    get id() : string {
        return this._id
    }

    get stepId() :string {
        return this._stepId
    }

    set stepId(value: string) {
        this._stepId = value
    }

    toJSON() : string {
        return JSON.stringify(this)
    }

    toSTEP() : string {
        let ifcClass : string = this.constructor.name.toUpperCase();
        return `${this.stepId} = ${ifcClass}(${this.getStepParameters()})`
    }

    toStepValue(value: any, isSelectOption : boolean = false) : string {
        return `${this.stepId}`
    }

    getStepParameters() : string {
        return ""
    }
}