import { BaseIfc } from "./BaseIfc";

export class Model {

    private _currentStepId = 0
    private _instances : Map<string, BaseIfc> = new Map<string,BaseIfc>()

    addInstance(instance: BaseIfc) {
        if(!this._instances.has(instance.id)) {
            this._instances.set(instance.id, instance)
            instance.stepId = this._currentStepId
            this._currentStepId ++
        }
    }

    removeInstance(instance: BaseIfc) {
        if(this._instances.has(instance.id)) {
            this._instances.delete(instance.id)
        }
    }

    toSTEP() : string
    {
        let step = ""

        this._instances.forEach(instance => {
            instance.stepId = this._currentStepId
            this._currentStepId++
        })

        this._instances.forEach(instance => {
            step += instance.toSTEP()
        });

        return step
    }
}