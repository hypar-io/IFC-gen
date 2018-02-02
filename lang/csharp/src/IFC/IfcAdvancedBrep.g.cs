

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedbrep.htm"/>
	/// </summary>
	public  partial class IfcAdvancedBrep : IfcManifoldSolidBrep
	{


		/// <summary>
		/// Construct a IfcAdvancedBrep with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAdvancedBrep(IfcClosedShell outer):base(outer)
		{


		}
		public static new IfcAdvancedBrep FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAdvancedBrep>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Outer != null ? Outer.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
