

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyenumeratedvalue.htm"/>
	/// </summary>
	public  partial class IfcPropertyEnumeratedValue : IfcSimpleProperty
	{
		public List<IfcValue> EnumerationValues{get;set;} // optional
		public IfcPropertyEnumeration EnumerationReference{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyEnumeratedValue with all required attributes.
		/// </summary>
		public IfcPropertyEnumeratedValue(IfcIdentifier name):base(name)
		{
			EnumerationValues = new List<IfcValue>();


		}
		/// <summary>
		/// Construct a IfcPropertyEnumeratedValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyEnumeratedValue(IfcIdentifier name,IfcText description,List<IfcValue> enumerationValues,IfcPropertyEnumeration enumerationReference):base(name,description)
		{

			EnumerationValues = enumerationValues;
			EnumerationReference = enumerationReference;

		}
		public static new IfcPropertyEnumeratedValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyEnumeratedValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(EnumerationValues != null ? EnumerationValues.ToStepValue() : "$");
			parameters.Add(EnumerationReference != null ? EnumerationReference.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
