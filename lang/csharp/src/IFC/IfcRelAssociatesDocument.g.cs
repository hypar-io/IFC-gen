

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesdocument.htm"/>
	/// </summary>
	public  partial class IfcRelAssociatesDocument : IfcRelAssociates
	{
		public IfcDocumentSelect RelatingDocument{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssociatesDocument with all required attributes.
		/// </summary>
		public IfcRelAssociatesDocument(IfcGloballyUniqueId globalId,List<IfcDefinitionSelect> relatedObjects,IfcDocumentSelect relatingDocument):base(globalId,relatedObjects)
		{

			RelatingDocument = relatingDocument;

		}
		/// <summary>
		/// Construct a IfcRelAssociatesDocument with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssociatesDocument(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDefinitionSelect> relatedObjects,IfcDocumentSelect relatingDocument):base(globalId,ownerHistory,name,description,relatedObjects)
		{

			RelatingDocument = relatingDocument;

		}
		public static new IfcRelAssociatesDocument FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssociatesDocument>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingDocument != null ? RelatingDocument.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
