

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcolour.htm"/>
	/// </summary>
	public abstract partial class IfcPreDefinedColour : IfcPreDefinedItem
	{


		/// <summary>
		/// Construct a IfcPreDefinedColour with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPreDefinedColour(IfcLabel name):base(name)
		{


		}
		public static new IfcPreDefinedColour FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPreDefinedColour>(json); }

	}
}
