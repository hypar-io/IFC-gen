

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassification.htm"/>
	/// </summary>
	public  partial class IfcClassification : IfcExternalInformation
	{
		public IfcLabel Source{get;set;} // optional
		public IfcLabel Edition{get;set;} // optional
		public IfcDate EditionDate{get;set;} // optional
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public IfcURIReference Location{get;set;} // optional
		public List<IfcIdentifier> ReferenceTokens{get;set;} // optional
		public List<IfcRelAssociatesClassification> ClassificationForObjects{get;set;} // inverse
		public List<IfcClassificationReference> HasReferences{get;set;} // inverse


		/// <summary>
		/// Construct a IfcClassification with all required attributes.
		/// </summary>
		public IfcClassification(IfcLabel name):base()
		{
			ReferenceTokens = new List<IfcIdentifier>();
			ClassificationForObjects = new List<IfcRelAssociatesClassification>();
			HasReferences = new List<IfcClassificationReference>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcClassification with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcClassification(IfcLabel source,IfcLabel edition,IfcDate editionDate,IfcLabel name,IfcText description,IfcURIReference location,List<IfcIdentifier> referenceTokens):base()
		{
			ClassificationForObjects = new List<IfcRelAssociatesClassification>();
			HasReferences = new List<IfcClassificationReference>();

			Source = source;
			Edition = edition;
			EditionDate = editionDate;
			Name = name;
			Description = description;
			Location = location;
			ReferenceTokens = referenceTokens;

		}
		public static new IfcClassification FromJSON(string json){ return JsonConvert.DeserializeObject<IfcClassification>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Source != null ? Source.ToStepValue() : "$");
			parameters.Add(Edition != null ? Edition.ToStepValue() : "$");
			parameters.Add(EditionDate != null ? EditionDate.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(ReferenceTokens != null ? ReferenceTokens.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
