using Elements;
using Elements.Storage;
using IFC;
using System;
using System.IO;
using Xunit;
using Xunit.Abstractions;

namespace Elements.Tests
{
    public class Elements
    {
        private const string BASELINES = "../../../baselines/";

        private readonly ITestOutputHelper output;

        public Elements(ITestOutputHelper output)
        {
            this.output = output;
        }

        [Fact]
        public void Project()
        {
            var storage = new LocalStorageProvider();

            // Create some basic information about the model.
            var address = Model.CreateAddress(storage, "Office", "12345 Sesame Street", "Gotham", null, "New York", "10005", "USA");
            var user = Model.CreateUser(storage, "ikeough", "Ian", "Keough", "foo@bar.com", IfcRoleEnum.ARCHITECT);
            var org = Model.CreateOrganization("Test", "A test organization for model creation.", address);
            
            // Create the model.
            var m = new Model(storage, "Test Project", "A test project for the Elements API.", address, user, org);

            // Write the model to STEP.
            var stepPath = Path.Combine(BASELINES, "project.ifc");
            var step = m.ToSTEP(stepPath);
            File.WriteAllText(stepPath, step);
        }
    }
}