

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseriesvalue.htm"/>
	/// </summary>
	public  partial class IfcTimeSeriesValue : BaseIfc
	{
		public List<IfcValue> ListValues{get;set;} 


		/// <summary>
		/// Construct a IfcTimeSeriesValue with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTimeSeriesValue(List<IfcValue> listValues):base()
		{

			ListValues = listValues;

		}
		public static  IfcTimeSeriesValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTimeSeriesValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ListValues != null ? ListValues.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
