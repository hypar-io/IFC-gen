

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmetric.htm"/>
	/// </summary>
	public  partial class IfcMetric : IfcConstraint
	{
		public IfcBenchmarkEnum Benchmark{get;set;} 
		public IfcLabel ValueSource{get;set;} // optional
		public IfcMetricValueSelect DataValue{get;set;} // optional
		public IfcReference ReferencePath{get;set;} // optional


		/// <summary>
		/// Construct a IfcMetric with all required attributes.
		/// </summary>
		public IfcMetric(IfcLabel name,IfcConstraintEnum constraintGrade,IfcBenchmarkEnum benchmark):base(name,constraintGrade)
		{

			Benchmark = benchmark;

		}
		/// <summary>
		/// Construct a IfcMetric with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMetric(IfcLabel name,IfcText description,IfcConstraintEnum constraintGrade,IfcLabel constraintSource,IfcActorSelect creatingActor,IfcDateTime creationTime,IfcLabel userDefinedGrade,IfcBenchmarkEnum benchmark,IfcLabel valueSource,IfcMetricValueSelect dataValue,IfcReference referencePath):base(name,description,constraintGrade,constraintSource,creatingActor,creationTime,userDefinedGrade)
		{

			Benchmark = benchmark;
			ValueSource = valueSource;
			DataValue = dataValue;
			ReferencePath = referencePath;

		}
		public static new IfcMetric FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMetric>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ConstraintGrade.ToStepValue());
			parameters.Add(ConstraintSource != null ? ConstraintSource.ToStepValue() : "$");
			parameters.Add(CreatingActor != null ? CreatingActor.ToStepValue() : "$");
			parameters.Add(CreationTime != null ? CreationTime.ToStepValue() : "$");
			parameters.Add(UserDefinedGrade != null ? UserDefinedGrade.ToStepValue() : "$");
			parameters.Add(Benchmark.ToStepValue());
			parameters.Add(ValueSource != null ? ValueSource.ToStepValue() : "$");
			parameters.Add(DataValue != null ? DataValue.ToStepValue() : "$");
			parameters.Add(ReferencePath != null ? ReferencePath.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
