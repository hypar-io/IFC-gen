

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertylistvalue.htm"/>
	/// </summary>
	public  partial class IfcPropertyListValue : IfcSimpleProperty
	{
		public List<IfcValue> ListValues{get;set;} // optional
		public IfcUnit Unit{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyListValue with all required attributes.
		/// </summary>
		public IfcPropertyListValue(IfcIdentifier name):base(name)
		{
			ListValues = new List<IfcValue>();


		}
		/// <summary>
		/// Construct a IfcPropertyListValue with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyListValue(IfcIdentifier name,IfcText description,List<IfcValue> listValues,IfcUnit unit):base(name,description)
		{

			ListValues = listValues;
			Unit = unit;

		}
		public static new IfcPropertyListValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyListValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ListValues != null ? ListValues.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
