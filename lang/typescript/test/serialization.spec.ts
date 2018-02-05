import * as IFC from "../src/index"
import { expect } from "chai"
import "mocha"
import { BaseIfc } from "../src/BaseIfc"
import { Model } from "../src/Model"

describe("Model", () => {
    it("should serialize to XML", () => {
        let project = new IFC.IfcProject("foo")
        project.HasAssignments.push(new IFC.IfcRelAssignsToActor(null,null,null))
        project.Name = "Test Project"
        project.Description = "A project for testing."

        let model = new Model()
        model.addInstance(project)
        let xml = model.toXML()
        console.log(xml)
        expect(xml).to.not.equal(null)
    })

    it("should serialize to STEP", () => {
        
        let user = new IFC.IfcPersonAndOrganization(null,null)
        let app = new IFC.IfcApplication(null,"1","IFC-gen","IFC-gen")
        let date = Date.now()
        let ownerHistory = new IFC.IfcOwnerHistory(user, app, date)
        let project = new IFC.IfcProject("Test Project")
        let rel = new IFC.IfcRelAssignsToActor(null,null,null)

        project.HasAssignments.push(rel)
        project.Name = "Test Project"
        project.Description = "A project for testing."
        project.OwnerHistory = ownerHistory

        let person = new IFC.IfcPerson()
        person.FamilyName = "Keough"
        person.GivenName = "Ian"
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
        let meas = new IFC.IfcMeasureWithUnit(1.745e-2,planeAngle)
        let conv = new IFC.IfcConversionBasedUnit(dimExp, IFC.IfcUnitEnum.PLANEANGLEUNIT, "DEGREE", meas)
        let therm = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.THERMODYNAMICTEMPERATUREUNIT, IFC.IfcSIUnitName.DEGREE_CELSIUS)
        let lum = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.LUMINOUSINTENSITYUNIT, IFC.IfcSIUnitName.LUMEN)
        units.push(length,area,volume,planeAngle,solidAngle,mass,time,therm,lum)
        let unitsAssignment = new IFC.IfcUnitAssignment(units)

        let model = new Model()
        model.addInstance(user)
        model.addInstance(app)
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