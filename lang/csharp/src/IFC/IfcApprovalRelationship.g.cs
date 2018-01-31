

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalrelationship.htm"/>
	/// </summary>
	public  partial class IfcApprovalRelationship : IfcResourceLevelRelationship
	{
		public IfcApproval RelatingApproval{get;set;} 
		public List<IfcApproval> RelatedApprovals{get;set;} 


		/// <summary>
		/// Construct a IfcApprovalRelationship with all required attributes.
		/// </summary>
		public IfcApprovalRelationship(IfcApproval relatingApproval,List<IfcApproval> relatedApprovals):base()
		{

			RelatingApproval = relatingApproval;
			RelatedApprovals = relatedApprovals;

		}
		/// <summary>
		/// Construct a IfcApprovalRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcApprovalRelationship(IfcLabel name,IfcText description,IfcApproval relatingApproval,List<IfcApproval> relatedApprovals):base(name,description)
		{

			RelatingApproval = relatingApproval;
			RelatedApprovals = relatedApprovals;

		}
		public static new IfcApprovalRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcApprovalRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingApproval != null ? RelatingApproval.ToStepValue() : "$");
			parameters.Add(RelatedApprovals != null ? RelatedApprovals.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
