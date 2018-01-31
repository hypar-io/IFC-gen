

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostschedule.htm"/>
	/// </summary>
	public  partial class IfcCostSchedule : IfcControl
	{
		public IfcCostScheduleTypeEnum PredefinedType{get;set;} // optional
		public IfcLabel Status{get;set;} // optional
		public IfcDateTime SubmittedOn{get;set;} // optional
		public IfcDateTime UpdateDate{get;set;} // optional


		/// <summary>
		/// Construct a IfcCostSchedule with all required attributes.
		/// </summary>
		public IfcCostSchedule(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcCostSchedule with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCostSchedule(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcCostScheduleTypeEnum predefinedType,IfcLabel status,IfcDateTime submittedOn,IfcDateTime updateDate):base(globalId,ownerHistory,name,description,objectType,identification)
		{

			PredefinedType = predefinedType;
			Status = status;
			SubmittedOn = submittedOn;
			UpdateDate = updateDate;

		}
		public static new IfcCostSchedule FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCostSchedule>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(Status != null ? Status.ToStepValue() : "$");
			parameters.Add(SubmittedOn != null ? SubmittedOn.ToStepValue() : "$");
			parameters.Add(UpdateDate != null ? UpdateDate.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
