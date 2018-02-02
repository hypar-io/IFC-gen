

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyreferencevalue.htm"/>
	/// </summary>
	public  partial class IfcPropertyReferenceValue : IfcSimpleProperty
	{
		public IfcText UsageName{get;set;} // optional
		public IfcObjectReferenceSelect PropertyReference{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyReferenceValue with all required attributes.
		/// </summary>
		public IfcPropertyReferenceValue(IfcIdentifier name):base(name)
		{


		}
		/// <summary>
		/// Construct a IfcPropertyReferenceValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyReferenceValue(IfcIdentifier name,IfcText description,IfcText usageName,IfcObjectReferenceSelect propertyReference):base(name,description)
		{

			UsageName = usageName;
			PropertyReference = propertyReference;

		}
		public static new IfcPropertyReferenceValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyReferenceValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(UsageName != null ? UsageName.ToStepValue() : "$");
			parameters.Add(PropertyReference != null ? PropertyReference.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
