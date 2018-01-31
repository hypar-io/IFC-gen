

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitytime.htm"/>
	/// </summary>
	public  partial class IfcQuantityTime : IfcPhysicalSimpleQuantity
	{
		public IfcTimeMeasure TimeValue{get;set;} 
		public IfcLabel Formula{get;set;} // optional


		/// <summary>
		/// Construct a IfcQuantityTime with all required attributes.
		/// </summary>
		public IfcQuantityTime(IfcLabel name,IfcTimeMeasure timeValue):base(name)
		{

			TimeValue = timeValue;

		}
		/// <summary>
		/// Construct a IfcQuantityTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantityTime(IfcLabel name,IfcText description,IfcNamedUnit unit,IfcTimeMeasure timeValue,IfcLabel formula):base(name,description,unit)
		{

			TimeValue = timeValue;
			Formula = formula;

		}
		public static new IfcQuantityTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantityTime>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(TimeValue != null ? TimeValue.ToStepValue() : "$");
			parameters.Add(Formula != null ? Formula.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
