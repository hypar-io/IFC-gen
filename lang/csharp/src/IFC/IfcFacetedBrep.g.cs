

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrep.htm"/>
	/// </summary>
	public  partial class IfcFacetedBrep : IfcManifoldSolidBrep
	{


		/// <summary>
		/// Construct a IfcFacetedBrep with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFacetedBrep(IfcClosedShell outer):base(outer)
		{


		}
		public static new IfcFacetedBrep FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFacetedBrep>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Outer != null ? Outer.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
