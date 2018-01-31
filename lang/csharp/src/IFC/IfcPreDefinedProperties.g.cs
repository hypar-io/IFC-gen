

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedproperties.htm"/>
	/// </summary>
	public abstract partial class IfcPreDefinedProperties : IfcPropertyAbstraction
	{


		/// <summary>
		/// Construct a IfcPreDefinedProperties with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPreDefinedProperties():base()
		{


		}
		public static new IfcPreDefinedProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPreDefinedProperties>(json); }

	}
}
