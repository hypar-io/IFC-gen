

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapproval.htm"/>
	/// </summary>
	public  partial class IfcApproval : BaseIfc
	{
		public IfcIdentifier Identifier{get;set;} // optional
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcDateTime TimeOfApproval{get;set;} // optional
		public IfcLabel Status{get;set;} // optional
		public IfcLabel Level{get;set;} // optional
		public IfcText Qualifier{get;set;} // optional
		public IfcActorSelect RequestingApproval{get;set;} // optional
		public IfcActorSelect GivingApproval{get;set;} // optional
		public List<IfcExternalReferenceRelationship> HasExternalReferences{get;set;} // inverse
		public List<IfcRelAssociatesApproval> ApprovedObjects{get;set;} // inverse
		public List<IfcResourceApprovalRelationship> ApprovedResources{get;set;} // inverse
		public List<IfcApprovalRelationship> IsRelatedWith{get;set;} // inverse
		public List<IfcApprovalRelationship> Relates{get;set;} // inverse


		/// <summary>
		/// Construct a IfcApproval with all required attributes.
		/// </summary>
		public IfcApproval():base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			ApprovedObjects = new List<IfcRelAssociatesApproval>();
			ApprovedResources = new List<IfcResourceApprovalRelationship>();
			IsRelatedWith = new List<IfcApprovalRelationship>();
			Relates = new List<IfcApprovalRelationship>();


		}
		/// <summary>
		/// Construct a IfcApproval with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcApproval(IfcIdentifier identifier,IfcLabel name,IfcText description,IfcDateTime timeOfApproval,IfcLabel status,IfcLabel level,IfcText qualifier,IfcActorSelect requestingApproval,IfcActorSelect givingApproval):base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			ApprovedObjects = new List<IfcRelAssociatesApproval>();
			ApprovedResources = new List<IfcResourceApprovalRelationship>();
			IsRelatedWith = new List<IfcApprovalRelationship>();
			Relates = new List<IfcApprovalRelationship>();

			Identifier = identifier;
			Name = name;
			Description = description;
			TimeOfApproval = timeOfApproval;
			Status = status;
			Level = level;
			Qualifier = qualifier;
			RequestingApproval = requestingApproval;
			GivingApproval = givingApproval;

		}
		public static  IfcApproval FromJSON(string json){ return JsonConvert.DeserializeObject<IfcApproval>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Identifier != null ? Identifier.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(TimeOfApproval != null ? TimeOfApproval.ToStepValue() : "$");
			parameters.Add(Status != null ? Status.ToStepValue() : "$");
			parameters.Add(Level != null ? Level.ToStepValue() : "$");
			parameters.Add(Qualifier != null ? Qualifier.ToStepValue() : "$");
			parameters.Add(RequestingApproval != null ? RequestingApproval.ToStepValue() : "$");
			parameters.Add(GivingApproval != null ? GivingApproval.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
