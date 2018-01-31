

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostitem.htm"/>
	/// </summary>
	public  partial class IfcCostItem : IfcControl
	{
		public IfcCostItemTypeEnum PredefinedType{get;set;} // optional
		public List<IfcCostValue> CostValues{get;set;} // optional
		public List<IfcPhysicalQuantity> CostQuantities{get;set;} // optional


		/// <summary>
		/// Construct a IfcCostItem with all required attributes.
		/// </summary>
		public IfcCostItem(IfcGloballyUniqueId globalId):base(globalId)
		{
			CostValues = new List<IfcCostValue>();
			CostQuantities = new List<IfcPhysicalQuantity>();


		}
		/// <summary>
		/// Construct a IfcCostItem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCostItem(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcCostItemTypeEnum predefinedType,List<IfcCostValue> costValues,List<IfcPhysicalQuantity> costQuantities):base(globalId,ownerHistory,name,description,objectType,identification)
		{

			PredefinedType = predefinedType;
			CostValues = costValues;
			CostQuantities = costQuantities;

		}
		public static new IfcCostItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCostItem>(json); }

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
			parameters.Add(CostValues != null ? CostValues.ToStepValue() : "$");
			parameters.Add(CostQuantities != null ? CostQuantities.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
