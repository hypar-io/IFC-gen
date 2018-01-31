

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjective.htm"/>
	/// </summary>
	public  partial class IfcObjective : IfcConstraint
	{
		public List<IfcConstraint> BenchmarkValues{get;set;} // optional
		public IfcLogicalOperatorEnum LogicalAggregator{get;set;} // optional
		public IfcObjectiveEnum ObjectiveQualifier{get;set;} 
		public IfcLabel UserDefinedQualifier{get;set;} // optional


		/// <summary>
		/// Construct a IfcObjective with all required attributes.
		/// </summary>
		public IfcObjective(IfcLabel name,IfcConstraintEnum constraintGrade,IfcObjectiveEnum objectiveQualifier):base(name,constraintGrade)
		{
			BenchmarkValues = new List<IfcConstraint>();

			ObjectiveQualifier = objectiveQualifier;

		}
		/// <summary>
		/// Construct a IfcObjective with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcObjective(IfcLabel name,IfcText description,IfcConstraintEnum constraintGrade,IfcLabel constraintSource,IfcActorSelect creatingActor,IfcDateTime creationTime,IfcLabel userDefinedGrade,List<IfcConstraint> benchmarkValues,IfcLogicalOperatorEnum logicalAggregator,IfcObjectiveEnum objectiveQualifier,IfcLabel userDefinedQualifier):base(name,description,constraintGrade,constraintSource,creatingActor,creationTime,userDefinedGrade)
		{

			BenchmarkValues = benchmarkValues;
			LogicalAggregator = logicalAggregator;
			ObjectiveQualifier = objectiveQualifier;
			UserDefinedQualifier = userDefinedQualifier;

		}
		public static new IfcObjective FromJSON(string json){ return JsonConvert.DeserializeObject<IfcObjective>(json); }

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
			parameters.Add(BenchmarkValues != null ? BenchmarkValues.ToStepValue() : "$");
			parameters.Add(LogicalAggregator.ToStepValue());
			parameters.Add(ObjectiveQualifier.ToStepValue());
			parameters.Add(UserDefinedQualifier != null ? UserDefinedQualifier.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
