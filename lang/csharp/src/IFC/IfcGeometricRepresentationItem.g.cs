

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationitem.htm"/>
	/// </summary>
	public abstract partial class IfcGeometricRepresentationItem : IfcRepresentationItem
	{


		/// <summary>
		/// Construct a IfcGeometricRepresentationItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGeometricRepresentationItem():base()
		{


		}
		public static new IfcGeometricRepresentationItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGeometricRepresentationItem>(json); }

	}
}
