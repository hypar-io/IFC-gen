

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoactor.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToActor : IfcRelAssigns
	{
		public IfcActor RelatingActor{get;set;} 
		public IfcActorRole ActingRole{get;set;} // optional


		/// <summary>
		/// Construct a IfcRelAssignsToActor with all required attributes.
		/// </summary>
		public IfcRelAssignsToActor(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcActor relatingActor):base(globalId,relatedObjects)
		{

			RelatingActor = relatingActor;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToActor with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToActor(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcActor relatingActor,IfcActorRole actingRole):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType)
		{

			RelatingActor = relatingActor;
			ActingRole = actingRole;

		}
		public static new IfcRelAssignsToActor FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToActor>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingActor != null ? RelatingActor.ToStepValue() : "$");
			parameters.Add(ActingRole != null ? ActingRole.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
