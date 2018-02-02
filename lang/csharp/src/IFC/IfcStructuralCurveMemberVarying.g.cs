

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurvemembervarying.htm"/>
	/// </summary>
	public  partial class IfcStructuralCurveMemberVarying : IfcStructuralCurveMember
	{


		/// <summary>
		/// Construct a IfcStructuralCurveMemberVarying with all required attributes.
		/// </summary>
		public IfcStructuralCurveMemberVarying(IfcGloballyUniqueId globalId,IfcStructuralCurveMemberTypeEnum predefinedType,IfcDirection axis):base(globalId,predefinedType,axis)
		{


		}
		/// <summary>
		/// Construct a IfcStructuralCurveMemberVarying with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralCurveMemberVarying(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralCurveMemberTypeEnum predefinedType,IfcDirection axis):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,predefinedType,axis)
		{


		}
		public static new IfcStructuralCurveMemberVarying FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralCurveMemberVarying>(json); }

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
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(Axis != null ? Axis.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
