import * as IFC from "../src/index"
import { expect } from "chai"
import "mocha"
import { BaseIfc } from "../src/BaseIfc"

let XmlWriter = require("xml-writer")

describe("Project", () => {
    it("should serialize to XML", () => {
        let project = new IFC.IfcProject(new IFC.IfcGloballyUniqueId("foo"))
        project.stepId = 1
        project.HasAssignments.push(new IFC.IfcRelAssignsToActor(null,null,null))
        project.Name = new IFC.IfcLabel("Test Project")
        project.Description = new IFC.IfcText("A project for testing.")

        let xw = new XmlWriter(true);
        xw.startDocument()
        project.toXML(xw)
        xw.endDocument()
        console.log(xw.toString())
        expect(project).to.not.equal(null)
    })

    it("should serialize to STEP", () => {
        
        let user = new IFC.IfcPersonAndOrganization(null,null)
        user.stepId = 1

        let app = new IFC.IfcApplication(null,null,null,null)
        app.stepId = 2

        let date = new IFC.IfcTimeStamp(Date.now())
        date.stepId = 3

        let ownerHistory = new IFC.IfcOwnerHistory(user, app, date)
        ownerHistory.stepId = 4

        let project = new IFC.IfcProject(new IFC.IfcGloballyUniqueId("foo"))
        project.stepId = 5

        let rel = new IFC.IfcRelAssignsToActor(null,null,null)
        rel.stepId = 6

        project.HasAssignments.push(rel)
        project.Name = new IFC.IfcLabel("Test Project")
        project.Description = new IFC.IfcText("A project for testing.")
        project.OwnerHistory = ownerHistory

        let person = new IFC.IfcPerson()
        person.FamilyName = new IFC.IfcLabel("Keough")
        person.GivenName = new IFC.IfcLabel("Ian")
        person.stepId = 7
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

        let ids = new Array<any>()
        ids.push(user,app,date,ownerHistory,project,rel,person)
        ids.forEach(id => {
            console.log(id.toSTEP())
        });

        expect(project).to.not.equal(null)
    })
})