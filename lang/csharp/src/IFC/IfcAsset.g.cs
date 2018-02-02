

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasset.htm"/>
	/// </summary>
	public  partial class IfcAsset : IfcGroup
	{
		public IfcIdentifier Identification{get;set;} // optional
		public IfcCostValue OriginalValue{get;set;} // optional
		public IfcCostValue CurrentValue{get;set;} // optional
		public IfcCostValue TotalReplacementCost{get;set;} // optional
		public IfcActorSelect Owner{get;set;} // optional
		public IfcActorSelect User{get;set;} // optional
		public IfcPerson ResponsiblePerson{get;set;} // optional
		public IfcDate IncorporationDate{get;set;} // optional
		public IfcCostValue DepreciatedValue{get;set;} // optional


		/// <summary>
		/// Construct a IfcAsset with all required attributes.
		/// </summary>
		public IfcAsset(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcAsset with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAsset(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcCostValue originalValue,IfcCostValue currentValue,IfcCostValue totalReplacementCost,IfcActorSelect owner,IfcActorSelect user,IfcPerson responsiblePerson,IfcDate incorporationDate,IfcCostValue depreciatedValue):base(globalId,ownerHistory,name,description,objectType)
		{

			Identification = identification;
			OriginalValue = originalValue;
			CurrentValue = currentValue;
			TotalReplacementCost = totalReplacementCost;
			Owner = owner;
			User = user;
			ResponsiblePerson = responsiblePerson;
			IncorporationDate = incorporationDate;
			DepreciatedValue = depreciatedValue;

		}
		public static new IfcAsset FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAsset>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(OriginalValue != null ? OriginalValue.ToStepValue() : "$");
			parameters.Add(CurrentValue != null ? CurrentValue.ToStepValue() : "$");
			parameters.Add(TotalReplacementCost != null ? TotalReplacementCost.ToStepValue() : "$");
			parameters.Add(Owner != null ? Owner.ToStepValue() : "$");
			parameters.Add(User != null ? User.ToStepValue() : "$");
			parameters.Add(ResponsiblePerson != null ? ResponsiblePerson.ToStepValue() : "$");
			parameters.Add(IncorporationDate != null ? IncorporationDate.ToStepValue() : "$");
			parameters.Add(DepreciatedValue != null ? DepreciatedValue.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
