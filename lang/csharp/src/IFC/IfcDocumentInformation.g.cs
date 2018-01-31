

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformation.htm"/>
	/// </summary>
	public  partial class IfcDocumentInformation : IfcExternalInformation
	{
		public IfcIdentifier Identification{get;set;} 
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public IfcURIReference Location{get;set;} // optional
		public IfcText Purpose{get;set;} // optional
		public IfcText IntendedUse{get;set;} // optional
		public IfcText Scope{get;set;} // optional
		public IfcLabel Revision{get;set;} // optional
		public IfcActorSelect DocumentOwner{get;set;} // optional
		public List<IfcActorSelect> Editors{get;set;} // optional
		public IfcDateTime CreationTime{get;set;} // optional
		public IfcDateTime LastRevisionTime{get;set;} // optional
		public IfcIdentifier ElectronicFormat{get;set;} // optional
		public IfcDate ValidFrom{get;set;} // optional
		public IfcDate ValidUntil{get;set;} // optional
		public IfcDocumentConfidentialityEnum Confidentiality{get;set;} // optional
		public IfcDocumentStatusEnum Status{get;set;} // optional
		public List<IfcRelAssociatesDocument> DocumentInfoForObjects{get;set;} // inverse
		public List<IfcDocumentReference> HasDocumentReferences{get;set;} // inverse
		public List<IfcDocumentInformationRelationship> IsPointedTo{get;set;} // inverse
		public List<IfcDocumentInformationRelationship> IsPointer{get;set;} // inverse


		/// <summary>
		/// Construct a IfcDocumentInformation with all required attributes.
		/// </summary>
		public IfcDocumentInformation(IfcIdentifier identification,IfcLabel name):base()
		{
			Editors = new List<IfcActorSelect>();
			DocumentInfoForObjects = new List<IfcRelAssociatesDocument>();
			HasDocumentReferences = new List<IfcDocumentReference>();
			IsPointedTo = new List<IfcDocumentInformationRelationship>();
			IsPointer = new List<IfcDocumentInformationRelationship>();

			Identification = identification;
			Name = name;

		}
		/// <summary>
		/// Construct a IfcDocumentInformation with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDocumentInformation(IfcIdentifier identification,IfcLabel name,IfcText description,IfcURIReference location,IfcText purpose,IfcText intendedUse,IfcText scope,IfcLabel revision,IfcActorSelect documentOwner,List<IfcActorSelect> editors,IfcDateTime creationTime,IfcDateTime lastRevisionTime,IfcIdentifier electronicFormat,IfcDate validFrom,IfcDate validUntil,IfcDocumentConfidentialityEnum confidentiality,IfcDocumentStatusEnum status):base()
		{
			DocumentInfoForObjects = new List<IfcRelAssociatesDocument>();
			HasDocumentReferences = new List<IfcDocumentReference>();
			IsPointedTo = new List<IfcDocumentInformationRelationship>();
			IsPointer = new List<IfcDocumentInformationRelationship>();

			Identification = identification;
			Name = name;
			Description = description;
			Location = location;
			Purpose = purpose;
			IntendedUse = intendedUse;
			Scope = scope;
			Revision = revision;
			DocumentOwner = documentOwner;
			Editors = editors;
			CreationTime = creationTime;
			LastRevisionTime = lastRevisionTime;
			ElectronicFormat = electronicFormat;
			ValidFrom = validFrom;
			ValidUntil = validUntil;
			Confidentiality = confidentiality;
			Status = status;

		}
		public static new IfcDocumentInformation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDocumentInformation>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Purpose != null ? Purpose.ToStepValue() : "$");
			parameters.Add(IntendedUse != null ? IntendedUse.ToStepValue() : "$");
			parameters.Add(Scope != null ? Scope.ToStepValue() : "$");
			parameters.Add(Revision != null ? Revision.ToStepValue() : "$");
			parameters.Add(DocumentOwner != null ? DocumentOwner.ToStepValue() : "$");
			parameters.Add(Editors != null ? Editors.ToStepValue() : "$");
			parameters.Add(CreationTime != null ? CreationTime.ToStepValue() : "$");
			parameters.Add(LastRevisionTime != null ? LastRevisionTime.ToStepValue() : "$");
			parameters.Add(ElectronicFormat != null ? ElectronicFormat.ToStepValue() : "$");
			parameters.Add(ValidFrom != null ? ValidFrom.ToStepValue() : "$");
			parameters.Add(ValidUntil != null ? ValidUntil.ToStepValue() : "$");
			parameters.Add(Confidentiality.ToStepValue());
			parameters.Add(Status.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
