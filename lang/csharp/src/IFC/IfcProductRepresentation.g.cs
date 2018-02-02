

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductrepresentation.htm"/>
	/// </summary>
	public abstract partial class IfcProductRepresentation : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public List<IfcRepresentation> Representations{get;set;} 


		/// <summary>
		/// Construct a IfcProductRepresentation with all required attributes.
		/// </summary>
		public IfcProductRepresentation(List<IfcRepresentation> representations):base()
		{

			Representations = representations;

		}
		/// <summary>
		/// Construct a IfcProductRepresentation with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProductRepresentation(IfcLabel name,IfcText description,List<IfcRepresentation> representations):base()
		{

			Name = name;
			Description = description;
			Representations = representations;

		}
		public static  IfcProductRepresentation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProductRepresentation>(json); }

	}
}
