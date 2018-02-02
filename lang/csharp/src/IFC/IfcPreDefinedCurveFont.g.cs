

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcurvefont.htm"/>
	/// </summary>
	public abstract partial class IfcPreDefinedCurveFont : IfcPreDefinedItem
	{


		/// <summary>
		/// Construct a IfcPreDefinedCurveFont with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPreDefinedCurveFont(IfcLabel name):base(name)
		{


		}
		public static new IfcPreDefinedCurveFont FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPreDefinedCurveFont>(json); }

	}
}
