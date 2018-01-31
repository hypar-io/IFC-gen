

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentreference.htm"/>
	/// </summary>
	public  partial class IfcDocumentReference : IfcExternalReference
	{
		public IfcText Description{get;set;} // optional
		public IfcDocumentInformation ReferencedDocument{get;set;} // optional
		public List<IfcRelAssociatesDocument> DocumentRefForObjects{get;set;} // inverse


		/// <summary>
		/// Construct a IfcDocumentReference with all required attributes.
		/// </summary>
		public IfcDocumentReference():base()
		{
			DocumentRefForObjects = new List<IfcRelAssociatesDocument>();


		}
		/// <summary>
		/// Construct a IfcDocumentReference with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDocumentReference(IfcURIReference location,IfcIdentifier identification,IfcLabel name,IfcText description,IfcDocumentInformation referencedDocument):base(location,identification,name)
		{
			DocumentRefForObjects = new List<IfcRelAssociatesDocument>();

			Description = description;
			ReferencedDocument = referencedDocument;

		}
		public static new IfcDocumentReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDocumentReference>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ReferencedDocument != null ? ReferencedDocument.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
