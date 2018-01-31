

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperformancehistory.htm"/>
	/// </summary>
	public  partial class IfcPerformanceHistory : IfcControl
	{
		public IfcLabel LifeCyclePhase{get;set;} 
		public IfcPerformanceHistoryTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcPerformanceHistory with all required attributes.
		/// </summary>
		public IfcPerformanceHistory(IfcGloballyUniqueId globalId,IfcLabel lifeCyclePhase):base(globalId)
		{

			LifeCyclePhase = lifeCyclePhase;

		}
		/// <summary>
		/// Construct a IfcPerformanceHistory with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPerformanceHistory(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcLabel lifeCyclePhase,IfcPerformanceHistoryTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,identification)
		{

			LifeCyclePhase = lifeCyclePhase;
			PredefinedType = predefinedType;

		}
		public static new IfcPerformanceHistory FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPerformanceHistory>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(LifeCyclePhase != null ? LifeCyclePhase.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
