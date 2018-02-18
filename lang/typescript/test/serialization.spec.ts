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

        let model = new Model()

        let person = new IFC.IfcPerson()
        person.FamilyName = "Joe"
        person.GivenName = "Designer"
        model.addInstance(person)

        let designerOrg = new IFC.IfcOrganization("Hipster Design Company")
        model.addInstance(designerOrg)

        let user = new IFC.IfcPersonAndOrganization(person,designerOrg)
        model.addInstance(user)

        let softwareOrg = new IFC.IfcOrganization("Serious Software Company")
        model.addInstance(softwareOrg)

        let app = new IFC.IfcApplication(softwareOrg,"1.0","IFC-gen","IFC-gen")
        model.addInstance(app)

        let date = Date.now()
        let ownerHistory = new IFC.IfcOwnerHistory(user, app, date)
        ownerHistory.ChangeAction = IFC.IfcChangeActionEnum.NOTDEFINED
        model.addInstance(ownerHistory)
        
        let project = new IFC.IfcProject("Test Project")
        model.addInstance(project)

        let rel = new IFC.IfcRelAssignsToActor(null,null,null)
        model.addInstance(rel)
        project.HasAssignments.push(rel)
        project.Name = "Test Project"
        project.Description = "A project for testing."
        project.OwnerHistory = ownerHistory

        let units = Array<IFC.IfcSIUnit>()
        let length = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.LENGTHUNIT, IFC.IfcSIUnitName.METRE)
        model.addInstance(length)

        let area = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.AREAUNIT, IFC.IfcSIUnitName.SQUARE_METRE)
        model.addInstance(area)

        let volume = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.VOLUMEUNIT, IFC.IfcSIUnitName.CUBIC_METRE)
        model.addInstance(volume)

        let planeAngle = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.PLANEANGLEUNIT, IFC.IfcSIUnitName.RADIAN)
        model.addInstance(planeAngle)

        let solidAngle = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.SOLIDANGLEUNIT, IFC.IfcSIUnitName.STERADIAN)
        model.addInstance(solidAngle)

        let mass = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.MASSUNIT, IFC.IfcSIUnitName.GRAM)
        model.addInstance(mass)

        let time = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.TIMEUNIT, IFC.IfcSIUnitName.SECOND)
        model.addInstance(time)

        let dimExp = new IFC.IfcDimensionalExponents(0,0,0,0,0,0,0)
        model.addInstance(dimExp)

        let meas = new IFC.IfcMeasureWithUnit(1.745e-2,planeAngle)
        model.addInstance(meas)

        let conv = new IFC.IfcConversionBasedUnit(dimExp, IFC.IfcUnitEnum.PLANEANGLEUNIT, "DEGREE", meas)
        model.addInstance(conv)

        let therm = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.THERMODYNAMICTEMPERATUREUNIT, IFC.IfcSIUnitName.DEGREE_CELSIUS)
        model.addInstance(therm)

        let lum = new IFC.IfcSIUnit(null, IFC.IfcUnitEnum.LUMINOUSINTENSITYUNIT, IFC.IfcSIUnitName.LUMEN)
        model.addInstance(lum)

        units.push(length,area,volume,planeAngle,solidAngle,mass,time,therm,lum)
        let unitsAssignment = new IFC.IfcUnitAssignment(units)
        model.addInstance(unitsAssignment)
        project.UnitsInContext = unitsAssignment

        let step = model.toSTEP()
        console.log(step)

        expect(step).to.not.equal(null)
    })

    it("should encode page offset strings per ISO 10303-11", () =>{
        let test = "Ä"
        let result = BaseIfc.encode(test)
        expect(result).to.equal("\\X2\\00C4\\X0\\")
    })

    it("should encode apostrophes per ISO 10303-11", () =>{
        let test = "Don't"
        let result = BaseIfc.encode(test)
        expect(result).to.equal("Don\"t")
    })

    it("should encode empty strings per ISO 10303-11", () =>{
        let test = ""
        let result = BaseIfc.encode(test)
        expect(result).to.equal("\"")
    })

    it("should serialize a number using scientific notation per ISO 10303-11", () =>{
        let test = 0.01745
        let result = BaseIfc.toStepValue(test)
        expect(result).to.equal("1.745E-2")
    })
})