

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemembervarying.htm"/>
	/// </summary>
	public  partial class IfcStructuralSurfaceMemberVarying : IfcStructuralSurfaceMember
	{


		/// <summary>
		/// Construct a IfcStructuralSurfaceMemberVarying with all required attributes.
		/// </summary>
		public IfcStructuralSurfaceMemberVarying(IfcGloballyUniqueId globalId,IfcStructuralSurfaceMemberTypeEnum predefinedType):base(globalId,predefinedType)
		{


		}
		/// <summary>
		/// Construct a IfcStructuralSurfaceMemberVarying with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralSurfaceMemberVarying(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralSurfaceMemberTypeEnum predefinedType,IfcPositiveLengthMeasure thickness):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,predefinedType,thickness)
		{


		}
		public static new IfcStructuralSurfaceMemberVarying FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralSurfaceMemberVarying>(json); }

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
			parameters.Add(Thickness != null ? Thickness.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
