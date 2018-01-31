

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralload.htm"/>
	/// </summary>
	public abstract partial class IfcStructuralLoad : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoad with all required attributes.
		/// </summary>
		public IfcStructuralLoad():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoad with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoad(IfcLabel name):base()
		{

			Name = name;

		}
		public static  IfcStructuralLoad FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoad>(json); }

	}
}
