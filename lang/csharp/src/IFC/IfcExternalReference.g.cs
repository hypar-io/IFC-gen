

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreference.htm"/>
	/// </summary>
	public abstract partial class IfcExternalReference : BaseIfc
	{
		public IfcURIReference Location{get;set;} // optional
		public IfcIdentifier Identification{get;set;} // optional
		public IfcLabel Name{get;set;} // optional
		public List<IfcExternalReferenceRelationship> ExternalReferenceForResources{get;set;} // inverse


		/// <summary>
		/// Construct a IfcExternalReference with all required attributes.
		/// </summary>
		public IfcExternalReference():base()
		{
			ExternalReferenceForResources = new List<IfcExternalReferenceRelationship>();


		}
		/// <summary>
		/// Construct a IfcExternalReference with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternalReference(IfcURIReference location,IfcIdentifier identification,IfcLabel name):base()
		{
			ExternalReferenceForResources = new List<IfcExternalReferenceRelationship>();

			Location = location;
			Identification = identification;
			Name = name;

		}
		public static  IfcExternalReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternalReference>(json); }

	}
}
