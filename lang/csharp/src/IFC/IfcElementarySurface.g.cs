

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementarysurface.htm"/>
	/// </summary>
	public abstract partial class IfcElementarySurface : IfcSurface
	{
		public IfcAxis2Placement3D Position{get;set;} 


		/// <summary>
		/// Construct a IfcElementarySurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElementarySurface(IfcAxis2Placement3D position):base()
		{

			Position = position;

		}
		public static new IfcElementarySurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElementarySurface>(json); }

	}
}
