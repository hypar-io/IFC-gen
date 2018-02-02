

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcregulartimeseries.htm"/>
	/// </summary>
	public  partial class IfcRegularTimeSeries : IfcTimeSeries
	{
		public IfcTimeMeasure TimeStep{get;set;} 
		public List<IfcTimeSeriesValue> Values{get;set;} 


		/// <summary>
		/// Construct a IfcRegularTimeSeries with all required attributes.
		/// </summary>
		public IfcRegularTimeSeries(IfcLabel name,IfcDateTime startTime,IfcDateTime endTime,IfcTimeSeriesDataTypeEnum timeSeriesDataType,IfcDataOriginEnum dataOrigin,IfcTimeMeasure timeStep,List<IfcTimeSeriesValue> values):base(name,startTime,endTime,timeSeriesDataType,dataOrigin)
		{

			TimeStep = timeStep;
			Values = values;

		}
		/// <summary>
		/// Construct a IfcRegularTimeSeries with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRegularTimeSeries(IfcLabel name,IfcText description,IfcDateTime startTime,IfcDateTime endTime,IfcTimeSeriesDataTypeEnum timeSeriesDataType,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcUnit unit,IfcTimeMeasure timeStep,List<IfcTimeSeriesValue> values):base(name,description,startTime,endTime,timeSeriesDataType,dataOrigin,userDefinedDataOrigin,unit)
		{

			TimeStep = timeStep;
			Values = values;

		}
		public static new IfcRegularTimeSeries FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRegularTimeSeries>(json); }

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
			parameters.Add(TimeStep != null ? TimeStep.ToStepValue() : "$");
			parameters.Add(Values != null ? Values.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
