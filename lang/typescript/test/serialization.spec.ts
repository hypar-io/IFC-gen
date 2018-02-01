import * as IFC from "../src/index"
import { expect } from "chai"
import "mocha"
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
})