

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinventory.htm"/>
	/// </summary>
	public  partial class IfcInventory : IfcGroup
	{
		public IfcInventoryTypeEnum PredefinedType{get;set;} // optional
		public IfcActorSelect Jurisdiction{get;set;} // optional
		public List<IfcPerson> ResponsiblePersons{get;set;} // optional
		public IfcDate LastUpdateDate{get;set;} // optional
		public IfcCostValue CurrentValue{get;set;} // optional
		public IfcCostValue OriginalValue{get;set;} // optional


		/// <summary>
		/// Construct a IfcInventory with all required attributes.
		/// </summary>
		public IfcInventory(IfcGloballyUniqueId globalId):base(globalId)
		{
			ResponsiblePersons = new List<IfcPerson>();


		}
		/// <summary>
		/// Construct a IfcInventory with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcInventory(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcInventoryTypeEnum predefinedType,IfcActorSelect jurisdiction,List<IfcPerson> responsiblePersons,IfcDate lastUpdateDate,IfcCostValue currentValue,IfcCostValue originalValue):base(globalId,ownerHistory,name,description,objectType)
		{

			PredefinedType = predefinedType;
			Jurisdiction = jurisdiction;
			ResponsiblePersons = responsiblePersons;
			LastUpdateDate = lastUpdateDate;
			CurrentValue = currentValue;
			OriginalValue = originalValue;

		}
		public static new IfcInventory FromJSON(string json){ return JsonConvert.DeserializeObject<IfcInventory>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(Jurisdiction != null ? Jurisdiction.ToStepValue() : "$");
			parameters.Add(ResponsiblePersons != null ? ResponsiblePersons.ToStepValue() : "$");
			parameters.Add(LastUpdateDate != null ? LastUpdateDate.ToStepValue() : "$");
			parameters.Add(CurrentValue != null ? CurrentValue.ToStepValue() : "$");
			parameters.Add(OriginalValue != null ? OriginalValue.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
