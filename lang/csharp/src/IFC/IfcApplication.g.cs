

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapplication.htm"/>
	/// </summary>
	public  partial class IfcApplication : BaseIfc
	{
		public IfcOrganization ApplicationDeveloper{get;set;} 
		public IfcLabel Version{get;set;} 
		public IfcLabel ApplicationFullName{get;set;} 
		public IfcIdentifier ApplicationIdentifier{get;set;} 


		/// <summary>
		/// Construct a IfcApplication with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcApplication(IfcOrganization applicationDeveloper,IfcLabel version,IfcLabel applicationFullName,IfcIdentifier applicationIdentifier):base()
		{

			ApplicationDeveloper = applicationDeveloper;
			Version = version;
			ApplicationFullName = applicationFullName;
			ApplicationIdentifier = applicationIdentifier;

		}
		public static  IfcApplication FromJSON(string json){ return JsonConvert.DeserializeObject<IfcApplication>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ApplicationDeveloper != null ? ApplicationDeveloper.ToStepValue() : "$");
			parameters.Add(Version != null ? Version.ToStepValue() : "$");
			parameters.Add(ApplicationFullName != null ? ApplicationFullName.ToStepValue() : "$");
			parameters.Add(ApplicationIdentifier != null ? ApplicationIdentifier.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
