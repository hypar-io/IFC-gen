

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesapproval.htm"/>
	/// </summary>
	public  partial class IfcRelAssociatesApproval : IfcRelAssociates
	{
		public IfcApproval RelatingApproval{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssociatesApproval with all required attributes.
		/// </summary>
		public IfcRelAssociatesApproval(IfcGloballyUniqueId globalId,List<IfcDefinitionSelect> relatedObjects,IfcApproval relatingApproval):base(globalId,relatedObjects)
		{

			RelatingApproval = relatingApproval;

		}
		/// <summary>
		/// Construct a IfcRelAssociatesApproval with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssociatesApproval(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDefinitionSelect> relatedObjects,IfcApproval relatingApproval):base(globalId,ownerHistory,name,description,relatedObjects)
		{

			RelatingApproval = relatingApproval;

		}
		public static new IfcRelAssociatesApproval FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssociatesApproval>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingApproval != null ? RelatingApproval.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
