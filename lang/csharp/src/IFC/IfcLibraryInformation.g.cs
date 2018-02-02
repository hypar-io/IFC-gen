

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryinformation.htm"/>
	/// </summary>
	public  partial class IfcLibraryInformation : IfcExternalInformation
	{
		public IfcLabel Name{get;set;} 
		public IfcLabel Version{get;set;} // optional
		public IfcActorSelect Publisher{get;set;} // optional
		public IfcDateTime VersionDate{get;set;} // optional
		public IfcURIReference Location{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public List<IfcRelAssociatesLibrary> LibraryInfoForObjects{get;set;} // inverse
		public List<IfcLibraryReference> HasLibraryReferences{get;set;} // inverse


		/// <summary>
		/// Construct a IfcLibraryInformation with all required attributes.
		/// </summary>
		public IfcLibraryInformation(IfcLabel name):base()
		{
			LibraryInfoForObjects = new List<IfcRelAssociatesLibrary>();
			HasLibraryReferences = new List<IfcLibraryReference>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcLibraryInformation with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLibraryInformation(IfcLabel name,IfcLabel version,IfcActorSelect publisher,IfcDateTime versionDate,IfcURIReference location,IfcText description):base()
		{
			LibraryInfoForObjects = new List<IfcRelAssociatesLibrary>();
			HasLibraryReferences = new List<IfcLibraryReference>();

			Name = name;
			Version = version;
			Publisher = publisher;
			VersionDate = versionDate;
			Location = location;
			Description = description;

		}
		public static new IfcLibraryInformation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLibraryInformation>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Version != null ? Version.ToStepValue() : "$");
			parameters.Add(Publisher != null ? Publisher.ToStepValue() : "$");
			parameters.Add(VersionDate != null ? VersionDate.ToStepValue() : "$");
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
