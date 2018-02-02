

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationcontext.htm"/>
	/// </summary>
	public abstract partial class IfcRepresentationContext : BaseIfc
	{
		public IfcLabel ContextIdentifier{get;set;} // optional
		public IfcLabel ContextType{get;set;} // optional
		public List<IfcRepresentation> RepresentationsInContext{get;set;} // inverse


		/// <summary>
		/// Construct a IfcRepresentationContext with all required attributes.
		/// </summary>
		public IfcRepresentationContext():base()
		{
			RepresentationsInContext = new List<IfcRepresentation>();


		}
		/// <summary>
		/// Construct a IfcRepresentationContext with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRepresentationContext(IfcLabel contextIdentifier,IfcLabel contextType):base()
		{
			RepresentationsInContext = new List<IfcRepresentation>();

			ContextIdentifier = contextIdentifier;
			ContextType = contextType;

		}
		public static  IfcRepresentationContext FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRepresentationContext>(json); }

	}
}
