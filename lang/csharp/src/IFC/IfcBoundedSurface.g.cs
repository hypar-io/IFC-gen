

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedsurface.htm"/>
	/// </summary>
	public abstract partial class IfcBoundedSurface : IfcSurface
	{


		/// <summary>
		/// Construct a IfcBoundedSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundedSurface():base()
		{


		}
		public static new IfcBoundedSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundedSurface>(json); }

	}
}
