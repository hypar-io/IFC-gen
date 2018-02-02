

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofileproperties.htm"/>
	/// </summary>
	public  partial class IfcProfileProperties : IfcExtendedProperties
	{
		public IfcProfileDef ProfileDefinition{get;set;} 


		/// <summary>
		/// Construct a IfcProfileProperties with all required attributes.
		/// </summary>
		public IfcProfileProperties(List<IfcProperty> properties,IfcProfileDef profileDefinition):base(properties)
		{

			ProfileDefinition = profileDefinition;

		}
		/// <summary>
		/// Construct a IfcProfileProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProfileProperties(IfcIdentifier name,IfcText description,List<IfcProperty> properties,IfcProfileDef profileDefinition):base(name,description,properties)
		{

			ProfileDefinition = profileDefinition;

		}
		public static new IfcProfileProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProfileProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Properties != null ? Properties.ToStepValue() : "$");
			parameters.Add(ProfileDefinition != null ? ProfileDefinition.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
