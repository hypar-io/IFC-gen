

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconic.htm"/>
	/// </summary>
	public abstract partial class IfcConic : IfcCurve
	{
		public IfcAxis2Placement Position{get;set;} 


		/// <summary>
		/// Construct a IfcConic with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConic(IfcAxis2Placement position):base()
		{

			Position = position;

		}
		public static new IfcConic FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConic>(json); }

	}
}
