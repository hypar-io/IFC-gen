

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroup.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToGroup : IfcRelAssigns
	{
		public IfcGroup RelatingGroup{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssignsToGroup with all required attributes.
		/// </summary>
		public IfcRelAssignsToGroup(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcGroup relatingGroup):base(globalId,relatedObjects)
		{

			RelatingGroup = relatingGroup;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToGroup with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToGroup(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcGroup relatingGroup):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType)
		{

			RelatingGroup = relatingGroup;

		}
		public static new IfcRelAssignsToGroup FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToGroup>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingGroup != null ? RelatingGroup.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
