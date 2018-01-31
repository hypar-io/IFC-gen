

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmeasurewithunit.htm"/>
	/// </summary>
	public  partial class IfcMeasureWithUnit : BaseIfc
	{
		public IfcValue ValueComponent{get;set;} 
		public IfcUnit UnitComponent{get;set;} 


		/// <summary>
		/// Construct a IfcMeasureWithUnit with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMeasureWithUnit(IfcValue valueComponent,IfcUnit unitComponent):base()
		{

			ValueComponent = valueComponent;
			UnitComponent = unitComponent;

		}
		public static  IfcMeasureWithUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMeasureWithUnit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ValueComponent != null ? ValueComponent.ToStepValue() : "$");
			parameters.Add(UnitComponent != null ? UnitComponent.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
