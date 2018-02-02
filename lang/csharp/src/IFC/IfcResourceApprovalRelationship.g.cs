

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceapprovalrelationship.htm"/>
	/// </summary>
	public  partial class IfcResourceApprovalRelationship : IfcResourceLevelRelationship
	{
		public List<IfcResourceObjectSelect> RelatedResourceObjects{get;set;} 
		public IfcApproval RelatingApproval{get;set;} 


		/// <summary>
		/// Construct a IfcResourceApprovalRelationship with all required attributes.
		/// </summary>
		public IfcResourceApprovalRelationship(List<IfcResourceObjectSelect> relatedResourceObjects,IfcApproval relatingApproval):base()
		{

			RelatedResourceObjects = relatedResourceObjects;
			RelatingApproval = relatingApproval;

		}
		/// <summary>
		/// Construct a IfcResourceApprovalRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcResourceApprovalRelationship(IfcLabel name,IfcText description,List<IfcResourceObjectSelect> relatedResourceObjects,IfcApproval relatingApproval):base(name,description)
		{

			RelatedResourceObjects = relatedResourceObjects;
			RelatingApproval = relatingApproval;

		}
		public static new IfcResourceApprovalRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcResourceApprovalRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedResourceObjects != null ? RelatedResourceObjects.ToStepValue() : "$");
			parameters.Add(RelatingApproval != null ? RelatingApproval.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
