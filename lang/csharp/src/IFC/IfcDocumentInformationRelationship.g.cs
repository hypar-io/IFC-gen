

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformationrelationship.htm"/>
	/// </summary>
	public  partial class IfcDocumentInformationRelationship : IfcResourceLevelRelationship
	{
		public IfcDocumentInformation RelatingDocument{get;set;} 
		public List<IfcDocumentInformation> RelatedDocuments{get;set;} 
		public IfcLabel RelationshipType{get;set;} // optional


		/// <summary>
		/// Construct a IfcDocumentInformationRelationship with all required attributes.
		/// </summary>
		public IfcDocumentInformationRelationship(IfcDocumentInformation relatingDocument,List<IfcDocumentInformation> relatedDocuments):base()
		{

			RelatingDocument = relatingDocument;
			RelatedDocuments = relatedDocuments;

		}
		/// <summary>
		/// Construct a IfcDocumentInformationRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDocumentInformationRelationship(IfcLabel name,IfcText description,IfcDocumentInformation relatingDocument,List<IfcDocumentInformation> relatedDocuments,IfcLabel relationshipType):base(name,description)
		{

			RelatingDocument = relatingDocument;
			RelatedDocuments = relatedDocuments;
			RelationshipType = relationshipType;

		}
		public static new IfcDocumentInformationRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDocumentInformationRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingDocument != null ? RelatingDocument.ToStepValue() : "$");
			parameters.Add(RelatedDocuments != null ? RelatedDocuments.ToStepValue() : "$");
			parameters.Add(RelationshipType != null ? RelationshipType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
