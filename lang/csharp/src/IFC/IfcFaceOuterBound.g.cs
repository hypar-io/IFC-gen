

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfaceouterbound.htm"/>
	/// </summary>
	public  partial class IfcFaceOuterBound : IfcFaceBound
	{


		/// <summary>
		/// Construct a IfcFaceOuterBound with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFaceOuterBound(IfcLoop bound,IfcBoolean orientation):base(bound,orientation)
		{


		}
		public static new IfcFaceOuterBound FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFaceOuterBound>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Bound != null ? Bound.ToStepValue() : "$");
			parameters.Add(Orientation != null ? Orientation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
