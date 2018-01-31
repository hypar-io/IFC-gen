

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebound.htm"/>
	/// </summary>
	public  partial class IfcFaceBound : IfcTopologicalRepresentationItem
	{
		public IfcLoop Bound{get;set;} 
		public IfcBoolean Orientation{get;set;} 


		/// <summary>
		/// Construct a IfcFaceBound with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFaceBound(IfcLoop bound,IfcBoolean orientation):base()
		{

			Bound = bound;
			Orientation = orientation;

		}
		public static new IfcFaceBound FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFaceBound>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Bound != null ? Bound.ToStepValue() : "$");
			parameters.Add(Orientation != null ? Orientation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
