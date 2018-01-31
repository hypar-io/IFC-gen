

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifceventtype.htm"/>
	/// </summary>
	public  partial class IfcEventType : IfcTypeProcess
	{
		public IfcEventTypeEnum PredefinedType{get;set;} 
		public IfcEventTriggerTypeEnum EventTriggerType{get;set;} 
		public IfcLabel UserDefinedEventTriggerType{get;set;} // optional


		/// <summary>
		/// Construct a IfcEventType with all required attributes.
		/// </summary>
		public IfcEventType(IfcGloballyUniqueId globalId,IfcEventTypeEnum predefinedType,IfcEventTriggerTypeEnum eventTriggerType):base(globalId)
		{

			PredefinedType = predefinedType;
			EventTriggerType = eventTriggerType;

		}
		/// <summary>
		/// Construct a IfcEventType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEventType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel processType,IfcEventTypeEnum predefinedType,IfcEventTriggerTypeEnum eventTriggerType,IfcLabel userDefinedEventTriggerType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,identification,longDescription,processType)
		{

			PredefinedType = predefinedType;
			EventTriggerType = eventTriggerType;
			UserDefinedEventTriggerType = userDefinedEventTriggerType;

		}
		public static new IfcEventType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEventType>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ApplicableOccurrence != null ? ApplicableOccurrence.ToStepValue() : "$");
			parameters.Add(HasPropertySets != null ? HasPropertySets.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(LongDescription != null ? LongDescription.ToStepValue() : "$");
			parameters.Add(ProcessType != null ? ProcessType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(EventTriggerType.ToStepValue());
			parameters.Add(UserDefinedEventTriggerType != null ? UserDefinedEventTriggerType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
