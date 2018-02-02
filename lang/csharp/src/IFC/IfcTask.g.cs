

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctask.htm"/>
	/// </summary>
	public  partial class IfcTask : IfcProcess
	{
		public IfcLabel Status{get;set;} // optional
		public IfcLabel WorkMethod{get;set;} // optional
		public IfcBoolean IsMilestone{get;set;} 
		public IfcInteger Priority{get;set;} // optional
		public IfcTaskTime TaskTime{get;set;} // optional
		public IfcTaskTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcTask with all required attributes.
		/// </summary>
		public IfcTask(IfcGloballyUniqueId globalId,IfcBoolean isMilestone):base(globalId)
		{

			IsMilestone = isMilestone;

		}
		/// <summary>
		/// Construct a IfcTask with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTask(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcText longDescription,IfcLabel status,IfcLabel workMethod,IfcBoolean isMilestone,IfcInteger priority,IfcTaskTime taskTime,IfcTaskTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,identification,longDescription)
		{

			Status = status;
			WorkMethod = workMethod;
			IsMilestone = isMilestone;
			Priority = priority;
			TaskTime = taskTime;
			PredefinedType = predefinedType;

		}
		public static new IfcTask FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTask>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(LongDescription != null ? LongDescription.ToStepValue() : "$");
			parameters.Add(Status != null ? Status.ToStepValue() : "$");
			parameters.Add(WorkMethod != null ? WorkMethod.ToStepValue() : "$");
			parameters.Add(IsMilestone != null ? IsMilestone.ToStepValue() : "$");
			parameters.Add(Priority != null ? Priority.ToStepValue() : "$");
			parameters.Add(TaskTime != null ? TaskTime.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
