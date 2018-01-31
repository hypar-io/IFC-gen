

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectiongeometry.htm"/>
	/// </summary>
	public abstract partial class IfcConnectionGeometry : BaseIfc
	{


		/// <summary>
		/// Construct a IfcConnectionGeometry with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectionGeometry():base()
		{


		}
		public static  IfcConnectionGeometry FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectionGeometry>(json); }

	}
}
