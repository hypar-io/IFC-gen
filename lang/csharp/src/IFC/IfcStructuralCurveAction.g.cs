

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurveaction.htm"/>
	/// </summary>
	public  partial class IfcStructuralCurveAction : IfcStructuralAction
	{
		public IfcProjectedOrTrueLengthEnum ProjectedOrTrue{get;set;} // optional
		public IfcStructuralCurveActivityTypeEnum PredefinedType{get;set;} 


		/// <summary>
		/// Construct a IfcStructuralCurveAction with all required attributes.
		/// </summary>
		public IfcStructuralCurveAction(IfcGloballyUniqueId globalId,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal,IfcStructuralCurveActivityTypeEnum predefinedType):base(globalId,appliedLoad,globalOrLocal)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcStructuralCurveAction with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralCurveAction(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal,IfcBoolean destabilizingLoad,IfcProjectedOrTrueLengthEnum projectedOrTrue,IfcStructuralCurveActivityTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,appliedLoad,globalOrLocal,destabilizingLoad)
		{

			ProjectedOrTrue = projectedOrTrue;
			PredefinedType = predefinedType;

		}
		public static new IfcStructuralCurveAction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralCurveAction>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(ObjectPlacement != null ? ObjectPlacement.ToStepValue() : "$");
			parameters.Add(Representation != null ? Representation.ToStepValue() : "$");
			parameters.Add(AppliedLoad != null ? AppliedLoad.ToStepValue() : "$");
			parameters.Add(GlobalOrLocal.ToStepValue());
			parameters.Add(DestabilizingLoad != null ? DestabilizingLoad.ToStepValue() : "$");
			parameters.Add(ProjectedOrTrue.ToStepValue());
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
