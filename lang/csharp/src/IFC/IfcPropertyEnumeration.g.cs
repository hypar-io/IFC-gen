

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyenumeration.htm"/>
	/// </summary>
	public  partial class IfcPropertyEnumeration : IfcPropertyAbstraction
	{
		public IfcLabel Name{get;set;} 
		public List<IfcValue> EnumerationValues{get;set;} 
		public IfcUnit Unit{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyEnumeration with all required attributes.
		/// </summary>
		public IfcPropertyEnumeration(IfcLabel name,List<IfcValue> enumerationValues):base()
		{

			Name = name;
			EnumerationValues = enumerationValues;

		}
		/// <summary>
		/// Construct a IfcPropertyEnumeration with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyEnumeration(IfcLabel name,List<IfcValue> enumerationValues,IfcUnit unit):base()
		{

			Name = name;
			EnumerationValues = enumerationValues;
			Unit = unit;

		}
		public static new IfcPropertyEnumeration FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyEnumeration>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(EnumerationValues != null ? EnumerationValues.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
