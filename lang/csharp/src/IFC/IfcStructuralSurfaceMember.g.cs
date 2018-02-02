

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralsurfacemember.htm"/>
	/// </summary>
	public  partial class IfcStructuralSurfaceMember : IfcStructuralMember
	{
		public IfcStructuralSurfaceMemberTypeEnum PredefinedType{get;set;} 
		public IfcPositiveLengthMeasure Thickness{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralSurfaceMember with all required attributes.
		/// </summary>
		public IfcStructuralSurfaceMember(IfcGloballyUniqueId globalId,IfcStructuralSurfaceMemberTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcStructuralSurfaceMember with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralSurfaceMember(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralSurfaceMemberTypeEnum predefinedType,IfcPositiveLengthMeasure thickness):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{

			PredefinedType = predefinedType;
			Thickness = thickness;

		}
		public static new IfcStructuralSurfaceMember FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralSurfaceMember>(json); }

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
