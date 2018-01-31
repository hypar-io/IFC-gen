

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurvemember.htm"/>
	/// </summary>
	public  partial class IfcStructuralCurveMember : IfcStructuralMember
	{
		public IfcStructuralCurveMemberTypeEnum PredefinedType{get;set;} 
		public IfcDirection Axis{get;set;} 


		/// <summary>
		/// Construct a IfcStructuralCurveMember with all required attributes.
		/// </summary>
		public IfcStructuralCurveMember(IfcGloballyUniqueId globalId,IfcStructuralCurveMemberTypeEnum predefinedType,IfcDirection axis):base(globalId)
		{

			PredefinedType = predefinedType;
			Axis = axis;

		}
		/// <summary>
		/// Construct a IfcStructuralCurveMember with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralCurveMember(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcStructuralCurveMemberTypeEnum predefinedType,IfcDirection axis):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{

			PredefinedType = predefinedType;
			Axis = axis;

		}
		public static new IfcStructuralCurveMember FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralCurveMember>(json); }

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
