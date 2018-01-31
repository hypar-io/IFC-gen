

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysinglevalue.htm"/>
	/// </summary>
	public  partial class IfcPropertySingleValue : IfcSimpleProperty
	{
		public IfcValue NominalValue{get;set;} // optional
		public IfcUnit Unit{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertySingleValue with all required attributes.
		/// </summary>
		public IfcPropertySingleValue(IfcIdentifier name):base(name)
		{


		}
		/// <summary>
		/// Construct a IfcPropertySingleValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertySingleValue(IfcIdentifier name,IfcText description,IfcValue nominalValue,IfcUnit unit):base(name,description)
		{

			NominalValue = nominalValue;
			Unit = unit;

		}
		public static new IfcPropertySingleValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertySingleValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(NominalValue != null ? NominalValue.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
