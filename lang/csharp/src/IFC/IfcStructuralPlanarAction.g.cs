

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralplanaraction.htm"/>
	/// </summary>
	public  partial class IfcStructuralPlanarAction : IfcStructuralSurfaceAction
	{


		/// <summary>
		/// Construct a IfcStructuralPlanarAction with all required attributes.
		/// </summary>
		public IfcStructuralPlanarAction(IfcGloballyUniqueId globalId,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal,IfcStructuralSurfaceActivityTypeEnum predefinedType):base(globalId,appliedLoad,globalOrLocal,predefinedType)
		{


		}
		/// <summary>
		/// Construct a IfcStructuralPlanarAction with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralPlanarAction(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal,IfcBoolean destabilizingLoad,IfcProjectedOrTrueLengthEnum projectedOrTrue,IfcStructuralSurfaceActivityTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,appliedLoad,globalOrLocal,destabilizingLoad,projectedOrTrue,predefinedType)
		{


		}
		public static new IfcStructuralPlanarAction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralPlanarAction>(json); }

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
