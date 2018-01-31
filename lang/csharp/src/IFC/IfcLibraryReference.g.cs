

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryreference.htm"/>
	/// </summary>
	public  partial class IfcLibraryReference : IfcExternalReference
	{
		public IfcText Description{get;set;} // optional
		public IfcLanguageId Language{get;set;} // optional
		public IfcLibraryInformation ReferencedLibrary{get;set;} // optional
		public List<IfcRelAssociatesLibrary> LibraryRefForObjects{get;set;} // inverse


		/// <summary>
		/// Construct a IfcLibraryReference with all required attributes.
		/// </summary>
		public IfcLibraryReference():base()
		{
			LibraryRefForObjects = new List<IfcRelAssociatesLibrary>();


		}
		/// <summary>
		/// Construct a IfcLibraryReference with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLibraryReference(IfcURIReference location,IfcIdentifier identification,IfcLabel name,IfcText description,IfcLanguageId language,IfcLibraryInformation referencedLibrary):base(location,identification,name)
		{
			LibraryRefForObjects = new List<IfcRelAssociatesLibrary>();

			Description = description;
			Language = language;
			ReferencedLibrary = referencedLibrary;

		}
		public static new IfcLibraryReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLibraryReference>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Language != null ? Language.ToStepValue() : "$");
			parameters.Add(ReferencedLibrary != null ? ReferencedLibrary.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
