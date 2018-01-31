

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadstatic.htm"/>
	/// </summary>
	public abstract partial class IfcStructuralLoadStatic : IfcStructuralLoadOrResult
	{


		/// <summary>
		/// Construct a IfcStructuralLoadStatic with all required attributes.
		/// </summary>
		public IfcStructuralLoadStatic():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadStatic with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadStatic(IfcLabel name):base(name)
		{


		}
		public static new IfcStructuralLoadStatic FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadStatic>(json); }

	}
}
