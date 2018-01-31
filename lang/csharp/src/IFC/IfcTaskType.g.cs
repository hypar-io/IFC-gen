

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctasktype.htm"/>
	/// </summary>
	public  partial class IfcTaskType : IfcTypeProcess
	{
		public IfcTaskTypeEnum PredefinedType{get;set;} 
		public IfcLabel WorkMethod{get;set;} // optional


		/// <summary>
		/// Construct a IfcTaskType with all required attributes.
		/// </summary>
		public IfcTaskType(IfcGloballyUniqueId globalId,IfcTaskTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcTaskType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTaskType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel processType,IfcTaskTypeEnum predefinedType,IfcLabel workMethod):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,identification,longDescription,processType)
		{

			PredefinedType = predefinedType;
			WorkMethod = workMethod;

		}
		public static new IfcTaskType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTaskType>(json); }

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
			parameters.Add(WorkMethod != null ? WorkMethod.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
