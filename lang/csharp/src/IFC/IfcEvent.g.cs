

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevent.htm"/>
	/// </summary>
	public  partial class IfcEvent : IfcProcess
	{
		public IfcEventTypeEnum PredefinedType{get;set;} // optional
		public IfcEventTriggerTypeEnum EventTriggerType{get;set;} // optional
		public IfcLabel UserDefinedEventTriggerType{get;set;} // optional
		public IfcEventTime EventOccurenceTime{get;set;} // optional


		/// <summary>
		/// Construct a IfcEvent with all required attributes.
		/// </summary>
		public IfcEvent(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcEvent with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEvent(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcText longDescription,IfcEventTypeEnum predefinedType,IfcEventTriggerTypeEnum eventTriggerType,IfcLabel userDefinedEventTriggerType,IfcEventTime eventOccurenceTime):base(globalId,ownerHistory,name,description,objectType,identification,longDescription)
		{

			PredefinedType = predefinedType;
			EventTriggerType = eventTriggerType;
			UserDefinedEventTriggerType = userDefinedEventTriggerType;
			EventOccurenceTime = eventOccurenceTime;

		}
		public static new IfcEvent FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEvent>(json); }

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
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(EventTriggerType.ToStepValue());
			parameters.Add(UserDefinedEventTriggerType != null ? UserDefinedEventTriggerType.ToStepValue() : "$");
			parameters.Add(EventOccurenceTime != null ? EventOccurenceTime.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
