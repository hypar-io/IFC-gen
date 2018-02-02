

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralmember.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsStructuralMember : IfcRelConnects
	{
		public IfcStructuralMember RelatingStructuralMember{get;set;} 
		public IfcStructuralConnection RelatedStructuralConnection{get;set;} 
		public IfcBoundaryCondition AppliedCondition{get;set;} // optional
		public IfcStructuralConnectionCondition AdditionalConditions{get;set;} // optional
		public IfcLengthMeasure SupportedLength{get;set;} // optional
		public IfcAxis2Placement3D ConditionCoordinateSystem{get;set;} // optional


		/// <summary>
		/// Construct a IfcRelConnectsStructuralMember with all required attributes.
		/// </summary>
		public IfcRelConnectsStructuralMember(IfcGloballyUniqueId globalId,IfcStructuralMember relatingStructuralMember,IfcStructuralConnection relatedStructuralConnection):base(globalId)
		{

			RelatingStructuralMember = relatingStructuralMember;
			RelatedStructuralConnection = relatedStructuralConnection;

		}
		/// <summary>
		/// Construct a IfcRelConnectsStructuralMember with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsStructuralMember(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcStructuralMember relatingStructuralMember,IfcStructuralConnection relatedStructuralConnection,IfcBoundaryCondition appliedCondition,IfcStructuralConnectionCondition additionalConditions,IfcLengthMeasure supportedLength,IfcAxis2Placement3D conditionCoordinateSystem):base(globalId,ownerHistory,name,description)
		{

			RelatingStructuralMember = relatingStructuralMember;
			RelatedStructuralConnection = relatedStructuralConnection;
			AppliedCondition = appliedCondition;
			AdditionalConditions = additionalConditions;
			SupportedLength = supportedLength;
			ConditionCoordinateSystem = conditionCoordinateSystem;

		}
		public static new IfcRelConnectsStructuralMember FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsStructuralMember>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingStructuralMember != null ? RelatingStructuralMember.ToStepValue() : "$");
			parameters.Add(RelatedStructuralConnection != null ? RelatedStructuralConnection.ToStepValue() : "$");
			parameters.Add(AppliedCondition != null ? AppliedCondition.ToStepValue() : "$");
			parameters.Add(AdditionalConditions != null ? AdditionalConditions.ToStepValue() : "$");
			parameters.Add(SupportedLength != null ? SupportedLength.ToStepValue() : "$");
			parameters.Add(ConditionCoordinateSystem != null ? ConditionCoordinateSystem.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
