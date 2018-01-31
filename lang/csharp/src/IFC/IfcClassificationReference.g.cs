

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationreference.htm"/>
	/// </summary>
	public  partial class IfcClassificationReference : IfcExternalReference
	{
		public IfcClassificationReferenceSelect ReferencedSource{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcIdentifier Sort{get;set;} // optional
		public List<IfcRelAssociatesClassification> ClassificationRefForObjects{get;set;} // inverse
		public List<IfcClassificationReference> HasReferences{get;set;} // inverse


		/// <summary>
		/// Construct a IfcClassificationReference with all required attributes.
		/// </summary>
		public IfcClassificationReference():base()
		{
			ClassificationRefForObjects = new List<IfcRelAssociatesClassification>();
			HasReferences = new List<IfcClassificationReference>();


		}
		/// <summary>
		/// Construct a IfcClassificationReference with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcClassificationReference(IfcURIReference location,IfcIdentifier identification,IfcLabel name,IfcClassificationReferenceSelect referencedSource,IfcText description,IfcIdentifier sort):base(location,identification,name)
		{
			ClassificationRefForObjects = new List<IfcRelAssociatesClassification>();
			HasReferences = new List<IfcClassificationReference>();

			ReferencedSource = referencedSource;
			Description = description;
			Sort = sort;

		}
		public static new IfcClassificationReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcClassificationReference>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(ReferencedSource != null ? ReferencedSource.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Sort != null ? Sort.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
