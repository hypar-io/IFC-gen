

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundedcurve.htm"/>
	/// </summary>
	public abstract partial class IfcBoundedCurve : IfcCurve
	{


		/// <summary>
		/// Construct a IfcBoundedCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundedCurve():base()
		{


		}
		public static new IfcBoundedCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundedCurve>(json); }

	}
}
