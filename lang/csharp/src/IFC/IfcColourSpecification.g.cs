

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourspecification.htm"/>
	/// </summary>
	public abstract partial class IfcColourSpecification : IfcPresentationItem
	{
		public IfcLabel Name{get;set;} // optional


		/// <summary>
		/// Construct a IfcColourSpecification with all required attributes.
		/// </summary>
		public IfcColourSpecification():base()
		{


		}
		/// <summary>
		/// Construct a IfcColourSpecification with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcColourSpecification(IfcLabel name):base()
		{

			Name = name;

		}
		public static new IfcColourSpecification FromJSON(string json){ return JsonConvert.DeserializeObject<IfcColourSpecification>(json); }

	}
}
