

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm"/>
	/// </summary>
	public  partial class IfcFacetedBrepWithVoids : IfcFacetedBrep
	{
		public List<IfcClosedShell> Voids{get;set;} 


		/// <summary>
		/// Construct a IfcFacetedBrepWithVoids with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFacetedBrepWithVoids(IfcClosedShell outer,List<IfcClosedShell> voids):base(outer)
		{

			Voids = voids;

		}
		public static new IfcFacetedBrepWithVoids FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFacetedBrepWithVoids>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Outer != null ? Outer.ToStepValue() : "$");
			parameters.Add(Voids != null ? Voids.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
