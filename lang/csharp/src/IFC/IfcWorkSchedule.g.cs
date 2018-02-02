

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkschedule.htm"/>
	/// </summary>
	public  partial class IfcWorkSchedule : IfcWorkControl
	{
		public IfcWorkScheduleTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcWorkSchedule with all required attributes.
		/// </summary>
		public IfcWorkSchedule(IfcGloballyUniqueId globalId,IfcDateTime creationDate,IfcDateTime startTime):base(globalId,creationDate,startTime)
		{


		}
		/// <summary>
		/// Construct a IfcWorkSchedule with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWorkSchedule(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcDateTime creationDate,List<IfcPerson> creators,IfcLabel purpose,IfcDuration duration,IfcDuration totalFloat,IfcDateTime startTime,IfcDateTime finishTime,IfcWorkScheduleTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,identification,creationDate,creators,purpose,duration,totalFloat,startTime,finishTime)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcWorkSchedule FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWorkSchedule>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(CreationDate != null ? CreationDate.ToStepValue() : "$");
			parameters.Add(Creators != null ? Creators.ToStepValue() : "$");
			parameters.Add(Purpose != null ? Purpose.ToStepValue() : "$");
			parameters.Add(Duration != null ? Duration.ToStepValue() : "$");
			parameters.Add(TotalFloat != null ? TotalFloat.ToStepValue() : "$");
			parameters.Add(StartTime != null ? StartTime.ToStepValue() : "$");
			parameters.Add(FinishTime != null ? FinishTime.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
