

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclagtime.htm"/>
	/// </summary>
	public  partial class IfcLagTime : IfcSchedulingTime
	{
		public IfcTimeOrRatioSelect LagValue{get;set;} 
		public IfcTaskDurationEnum DurationType{get;set;} 


		/// <summary>
		/// Construct a IfcLagTime with all required attributes.
		/// </summary>
		public IfcLagTime(IfcTimeOrRatioSelect lagValue,IfcTaskDurationEnum durationType):base()
		{

			LagValue = lagValue;
			DurationType = durationType;

		}
		/// <summary>
		/// Construct a IfcLagTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLagTime(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin,IfcTimeOrRatioSelect lagValue,IfcTaskDurationEnum durationType):base(name,dataOrigin,userDefinedDataOrigin)
		{

			LagValue = lagValue;
			DurationType = durationType;

		}
		public static new IfcLagTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLagTime>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DataOrigin.ToStepValue());
			parameters.Add(UserDefinedDataOrigin != null ? UserDefinedDataOrigin.ToStepValue() : "$");
			parameters.Add(LagValue != null ? LagValue.ToStepValue() : "$");
			parameters.Add(DurationType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
