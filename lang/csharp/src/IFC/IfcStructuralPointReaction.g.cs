

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralpointreaction.htm"/>
	/// </summary>
	public  partial class IfcStructuralPointReaction : IfcStructuralReaction
	{


		/// <summary>
		/// Construct a IfcStructuralPointReaction with all required attributes.
		/// </summary>
		public IfcStructuralPointReaction(IfcGloballyUniqueId globalId,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal):base(globalId,appliedLoad,globalOrLocal)
		{


		}
		/// <summary>
		/// Construct a IfcStructuralPointReaction with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralPointReaction(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralLoad appliedLoad,IfcGlobalOrLocalEnum globalOrLocal):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,appliedLoad,globalOrLocal)
		{


		}
		public static new IfcStructuralPointReaction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralPointReaction>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
