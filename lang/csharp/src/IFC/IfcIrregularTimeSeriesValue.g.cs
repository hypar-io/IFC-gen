

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseriesvalue.htm"/>
	/// </summary>
	public  partial class IfcIrregularTimeSeriesValue : BaseIfc
	{
		public IfcDateTime TimeStamp{get;set;} 
		public List<IfcValue> ListValues{get;set;} 


		/// <summary>
		/// Construct a IfcIrregularTimeSeriesValue with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIrregularTimeSeriesValue(IfcDateTime timeStamp,List<IfcValue> listValues):base()
		{

			TimeStamp = timeStamp;
			ListValues = listValues;

		}
		public static  IfcIrregularTimeSeriesValue FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIrregularTimeSeriesValue>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TimeStamp != null ? TimeStamp.ToStepValue() : "$");
			parameters.Add(ListValues != null ? ListValues.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
