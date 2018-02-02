

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctessellateditem.htm"/>
	/// </summary>
	public abstract partial class IfcTessellatedItem : IfcGeometricRepresentationItem
	{


		/// <summary>
		/// Construct a IfcTessellatedItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTessellatedItem():base()
		{


		}
		public static new IfcTessellatedItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTessellatedItem>(json); }

	}
}
