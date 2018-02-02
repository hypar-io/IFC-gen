

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccrewresourcetype.htm"/>
	/// </summary>
	public  partial class IfcCrewResourceType : IfcConstructionResourceType
	{
		public IfcCrewResourceTypeEnum PredefinedType{get;set;} 


		/// <summary>
		/// Construct a IfcCrewResourceType with all required attributes.
		/// </summary>
		public IfcCrewResourceType(IfcGloballyUniqueId globalId,IfcCrewResourceTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcCrewResourceType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCrewResourceType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel resourceType,List<IfcAppliedValue> baseCosts,IfcPhysicalQuantity baseQuantity,IfcCrewResourceTypeEnum predefinedType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,identification,longDescription,resourceType,baseCosts,baseQuantity)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcCrewResourceType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCrewResourceType>(json); }

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
			parameters.Add(ResourceType != null ? ResourceType.ToStepValue() : "$");
			parameters.Add(BaseCosts != null ? BaseCosts.ToStepValue() : "$");
			parameters.Add(BaseQuantity != null ? BaseQuantity.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
