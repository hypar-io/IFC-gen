

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstructionproductresourcetype.htm"/>
	/// </summary>
	public  partial class IfcConstructionProductResourceType : IfcConstructionResourceType
	{
		public IfcConstructionProductResourceTypeEnum PredefinedType{get;set;} 


		/// <summary>
		/// Construct a IfcConstructionProductResourceType with all required attributes.
		/// </summary>
		public IfcConstructionProductResourceType(IfcGloballyUniqueId globalId,IfcConstructionProductResourceTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcConstructionProductResourceType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConstructionProductResourceType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel resourceType,List<IfcAppliedValue> baseCosts,IfcPhysicalQuantity baseQuantity,IfcConstructionProductResourceTypeEnum predefinedType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,identification,longDescription,resourceType,baseCosts,baseQuantity)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcConstructionProductResourceType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConstructionProductResourceType>(json); }

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
