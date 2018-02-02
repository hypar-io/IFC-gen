

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurveconnection.htm"/>
	/// </summary>
	public  partial class IfcStructuralCurveConnection : IfcStructuralConnection
	{
		public IfcDirection Axis{get;set;} 


		/// <summary>
		/// Construct a IfcStructuralCurveConnection with all required attributes.
		/// </summary>
		public IfcStructuralCurveConnection(IfcGloballyUniqueId globalId,IfcDirection axis):base(globalId)
		{

			Axis = axis;

		}
		/// <summary>
		/// Construct a IfcStructuralCurveConnection with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralCurveConnection(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcBoundaryCondition appliedCondition,IfcDirection axis):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,appliedCondition)
		{

			Axis = axis;

		}
		public static new IfcStructuralCurveConnection FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralCurveConnection>(json); }

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
			parameters.Add(Axis != null ? Axis.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
