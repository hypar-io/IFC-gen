

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralpointconnection.htm"/>
	/// </summary>
	public  partial class IfcStructuralPointConnection : IfcStructuralConnection
	{
		public IfcAxis2Placement3D ConditionCoordinateSystem{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralPointConnection with all required attributes.
		/// </summary>
		public IfcStructuralPointConnection(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcStructuralPointConnection with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralPointConnection(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcBoundaryCondition appliedCondition,IfcAxis2Placement3D conditionCoordinateSystem):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,appliedCondition)
		{

			ConditionCoordinateSystem = conditionCoordinateSystem;

		}
		public static new IfcStructuralPointConnection FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralPointConnection>(json); }

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
			parameters.Add(AppliedCondition != null ? AppliedCondition.ToStepValue() : "$");
			parameters.Add(ConditionCoordinateSystem != null ? ConditionCoordinateSystem.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
