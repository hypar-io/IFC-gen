

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstocontrol.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToControl : IfcRelAssigns
	{
		public IfcControl RelatingControl{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssignsToControl with all required attributes.
		/// </summary>
		public IfcRelAssignsToControl(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcControl relatingControl):base(globalId,relatedObjects)
		{

			RelatingControl = relatingControl;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToControl with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToControl(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcControl relatingControl):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType)
		{

			RelatingControl = relatingControl;

		}
		public static new IfcRelAssignsToControl FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToControl>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingControl != null ? RelatingControl.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
