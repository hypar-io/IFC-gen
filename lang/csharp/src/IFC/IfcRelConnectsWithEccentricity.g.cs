

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswitheccentricity.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsWithEccentricity : IfcRelConnectsStructuralMember
	{
		public IfcConnectionGeometry ConnectionConstraint{get;set;} 


		/// <summary>
		/// Construct a IfcRelConnectsWithEccentricity with all required attributes.
		/// </summary>
		public IfcRelConnectsWithEccentricity(IfcGloballyUniqueId globalId,IfcStructuralMember relatingStructuralMember,IfcStructuralConnection relatedStructuralConnection,IfcConnectionGeometry connectionConstraint):base(globalId,relatingStructuralMember,relatedStructuralConnection)
		{

			ConnectionConstraint = connectionConstraint;

		}
		/// <summary>
		/// Construct a IfcRelConnectsWithEccentricity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsWithEccentricity(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcStructuralMember relatingStructuralMember,IfcStructuralConnection relatedStructuralConnection,IfcBoundaryCondition appliedCondition,IfcStructuralConnectionCondition additionalConditions,IfcLengthMeasure supportedLength,IfcAxis2Placement3D conditionCoordinateSystem,IfcConnectionGeometry connectionConstraint):base(globalId,ownerHistory,name,description,relatingStructuralMember,relatedStructuralConnection,appliedCondition,additionalConditions,supportedLength,conditionCoordinateSystem)
		{

			ConnectionConstraint = connectionConstraint;

		}
		public static new IfcRelConnectsWithEccentricity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsWithEccentricity>(json); }

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
			parameters.Add(ConnectionConstraint != null ? ConnectionConstraint.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
