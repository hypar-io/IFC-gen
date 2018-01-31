

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralpointaction.htm"/>
	/// </summary>
	public  partial class IfcStructuralPointAction : IfcStructuralAction
	{


		/// <summary>
		/// Construct a IfcStructuralPointAction with all required attributes.
		/// </summary>
		public IfcStructuralPointAction(IfcGloballyUniqueId globalId,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal):base(globalId,appliedLoad,globalOrLocal)
		{


		}
		/// <summary>
		/// Construct a IfcStructuralPointAction with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralPointAction(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal,IfcBoolean destabilizingLoad):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,appliedLoad,globalOrLocal,destabilizingLoad)
		{


		}
		public static new IfcStructuralPointAction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralPointAction>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
