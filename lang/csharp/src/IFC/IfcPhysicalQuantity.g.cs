

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalquantity.htm"/>
	/// </summary>
	public abstract partial class IfcPhysicalQuantity : BaseIfc
	{
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public List<IfcExternalReferenceRelationship> HasExternalReferences{get;set;} // inverse
		public List<IfcPhysicalComplexQuantity> PartOfComplex{get;set;} // inverse


		/// <summary>
		/// Construct a IfcPhysicalQuantity with all required attributes.
		/// </summary>
		public IfcPhysicalQuantity(IfcLabel name):base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			PartOfComplex = new List<IfcPhysicalComplexQuantity>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcPhysicalQuantity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPhysicalQuantity(IfcLabel name,IfcText description):base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			PartOfComplex = new List<IfcPhysicalComplexQuantity>();

			Name = name;
			Description = description;

		}
		public static  IfcPhysicalQuantity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPhysicalQuantity>(json); }

	}
}
