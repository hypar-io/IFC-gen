

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctopologicalrepresentationitem.htm"/>
	/// </summary>
	public abstract partial class IfcTopologicalRepresentationItem : IfcRepresentationItem
	{


		/// <summary>
		/// Construct a IfcTopologicalRepresentationItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTopologicalRepresentationItem():base()
		{


		}
		public static new IfcTopologicalRepresentationItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTopologicalRepresentationItem>(json); }

	}
}
