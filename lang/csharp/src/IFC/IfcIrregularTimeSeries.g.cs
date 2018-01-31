

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseries.htm"/>
	/// </summary>
	public  partial class IfcIrregularTimeSeries : IfcTimeSeries
	{
		public List<IfcIrregularTimeSeriesValue> Values{get;set;} 


		/// <summary>
		/// Construct a IfcIrregularTimeSeries with all required attributes.
		/// </summary>
		public IfcIrregularTimeSeries(IfcLabel name,IfcDateTime startTime,IfcDateTime endTime,IfcTimeSeriesDataTypeEnum timeSeriesDataType,IfcDataOriginEnum dataOrigin,List<IfcIrregularTimeSeriesValue> values):base(name,startTime,endTime,timeSeriesDataType,dataOrigin)
		{

			Values = values;

		}
		/// <summary>
		/// Construct a IfcIrregularTimeSeries with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIrregularTimeSeries(IfcLabel name,IfcText description,IfcDateTime startTime,IfcDateTime endTime,IfcTimeSeriesDataTypeEnum timeSeriesDataType,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcUnit unit,List<IfcIrregularTimeSeriesValue> values):base(name,description,startTime,endTime,timeSeriesDataType,dataOrigin,userDefinedDataOrigin,unit)
		{

			Values = values;

		}
		public static new IfcIrregularTimeSeries FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIrregularTimeSeries>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(StartTime != null ? StartTime.ToStepValue() : "$");
			parameters.Add(EndTime != null ? EndTime.ToStepValue() : "$");
			parameters.Add(TimeSeriesDataType.ToStepValue());
			parameters.Add(DataOrigin.ToStepValue());
			parameters.Add(UserDefinedDataOrigin != null ? UserDefinedDataOrigin.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(Values != null ? Values.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
