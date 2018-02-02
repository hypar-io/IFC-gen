

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedbrepwithvoids.htm"/>
	/// </summary>
	public  partial class IfcAdvancedBrepWithVoids : IfcAdvancedBrep
	{
		public List<IfcClosedShell> Voids{get;set;} 


		/// <summary>
		/// Construct a IfcAdvancedBrepWithVoids with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAdvancedBrepWithVoids(IfcClosedShell outer,List<IfcClosedShell> voids):base(outer)
		{

			Voids = voids;

		}
		public static new IfcAdvancedBrepWithVoids FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAdvancedBrepWithVoids>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Outer != null ? Outer.ToStepValue() : "$");
			parameters.Add(Voids != null ? Voids.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
