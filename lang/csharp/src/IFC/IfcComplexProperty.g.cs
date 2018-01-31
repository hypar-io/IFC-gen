

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexproperty.htm"/>
	/// </summary>
	public  partial class IfcComplexProperty : IfcProperty
	{
		public IfcIdentifier UsageName{get;set;} 
		public List<IfcProperty> HasProperties{get;set;} 


		/// <summary>
		/// Construct a IfcComplexProperty with all required attributes.
		/// </summary>
		public IfcComplexProperty(IfcIdentifier name,IfcIdentifier usageName,List<IfcProperty> hasProperties):base(name)
		{

			UsageName = usageName;
			HasProperties = hasProperties;

		}
		/// <summary>
		/// Construct a IfcComplexProperty with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcComplexProperty(IfcIdentifier name,IfcText description,IfcIdentifier usageName,List<IfcProperty> hasProperties):base(name,description)
		{

			UsageName = usageName;
			HasProperties = hasProperties;

		}
		public static new IfcComplexProperty FromJSON(string json){ return JsonConvert.DeserializeObject<IfcComplexProperty>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(UsageName != null ? UsageName.ToStepValue() : "$");
			parameters.Add(HasProperties != null ? HasProperties.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
