

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedtextfont.htm"/>
	/// </summary>
	public abstract partial class IfcPreDefinedTextFont : IfcPreDefinedItem
	{


		/// <summary>
		/// Construct a IfcPreDefinedTextFont with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPreDefinedTextFont(IfcLabel name):base(name)
		{


		}
		public static new IfcPreDefinedTextFont FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPreDefinedTextFont>(json); }

	}
}
