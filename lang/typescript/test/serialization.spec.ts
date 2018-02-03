import * as IFC from "../src/index"
import { expect } from "chai"
import "mocha"
import { BaseIfc } from "../src/BaseIfc"
import { Model } from "../src/Model"

describe("Model", () => {
    it("should serialize to XML", () => {
        let project = new IFC.IfcProject(new IFC.IfcGloballyUniqueId("foo"))
        project.HasAssignments.push(new IFC.IfcRelAssignsToActor(null,null,null))
        project.Name = new IFC.IfcLabel("Test Project")
        project.Description = new IFC.IfcText("A project for testing.")

        let model = new Model()
        model.addInstance(project)
        let xml = model.toXML()
        console.log(xml)
        expect(xml).to.not.equal(null)
    })

    it("should serialize to STEP", () => {
        
        let user = new IFC.IfcPersonAndOrganization(null,null)
        let app = new IFC.IfcApplication(null,new IFC.IfcLabel("1"),new IFC.IfcLabel("IFC-gen"),new IFC.IfcIdentifier("IFC-gen"))
        let date = new IFC.IfcTimeStamp(Date.now())
        let ownerHistory = new IFC.IfcOwnerHistory(user, app, date)
        let project = new IFC.IfcProject(new IFC.IfcGloballyUniqueId("foo"))
        let rel = new IFC.IfcRelAssignsToActor(null,null,null)

        project.HasAssignments.push(rel)
        project.Name = new IFC.IfcLabel("Test Project")
        project.Description = new IFC.IfcText("A project for testing.")
        project.OwnerHistory = ownerHistory

        let person = new IFC.IfcPerson()
        person.FamilyName = new IFC.IfcLabel("Keough")
        person.GivenName = new IFC.IfcLabel("Ian")
        user.ThePerson = person

        let units = Array<IFC.IfcSIUnit>()
        let length = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.LENGTHUNIT, IFC.IfcSIUnitName.METRE)
        let area = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.AREAUNIT, IFC.IfcSIUnitName.SQUARE_METRE)
        let volume = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.VOLUMEUNIT, IFC.IfcSIUnitName.CUBIC_METRE)
        let planeAngle = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.PLANEANGLEUNIT, IFC.IfcSIUnitName.RADIAN)
        let solidAngle = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.SOLIDANGLEUNIT, IFC.IfcSIUnitName.STERADIAN)
        let mass = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.MASSUNIT, IFC.IfcSIUnitName.GRAM)
        let time = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.TIMEUNIT, IFC.IfcSIUnitName.SECOND)
        let dimExp = new IFC.IfcDimensionalExponents(0,0,0,0,0,0,0)
        let meas = new IFC.IfcMeasureWithUnit(new IFC.IfcPlaneAngleMeasure(1.745e-2),planeAngle)
        let conv = new IFC.IfcConversionBasedUnit(dimExp, IFC.IfcUnitEnum.PLANEANGLEUNIT, new IFC.IfcLabel("DEGREE"), meas)
        let unitsAssignment = new IFC.IfcUnitAssignment(units)

        let model = new Model()
        model.addInstance(user)
        model.addInstance(app)
        model.addInstance(date)
        model.addInstance(ownerHistory)
        model.addInstance(project)
        model.addInstance(rel)
        model.addInstance(user)
        model.addInstance(length)
        model.addInstance(area)
        model.addInstance(volume)
        model.addInstance(planeAngle)
        model.addInstance(solidAngle)
        model.addInstance(mass)
        model.addInstance(time)
        model.addInstance(dimExp)
        model.addInstance(meas)
        model.addInstance(conv)
        model.addInstance(unitsAssignment)

        let step = model.toSTEP()
        console.log(step)

        expect(step).to.not.equal(null)
    })
})