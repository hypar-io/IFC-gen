

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmanifoldsolidbrep.htm"/>
	/// </summary>
	public abstract partial class IfcManifoldSolidBrep : IfcSolidModel
	{
		public IfcClosedShell Outer{get;set;} 


		/// <summary>
		/// Construct a IfcManifoldSolidBrep with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcManifoldSolidBrep(IfcClosedShell outer):base()
		{

			Outer = outer;

		}
		public static new IfcManifoldSolidBrep FromJSON(string json){ return JsonConvert.DeserializeObject<IfcManifoldSolidBrep>(json); }

	}
}
