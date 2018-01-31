

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpoint.htm"/>
	/// </summary>
	public abstract partial class IfcPoint : IfcGeometricRepresentationItem
	{


		/// <summary>
		/// Construct a IfcPoint with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPoint():base()
		{


		}
		public static new IfcPoint FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPoint>(json); }

	}
}
