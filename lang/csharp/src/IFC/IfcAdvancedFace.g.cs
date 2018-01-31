

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedface.htm"/>
	/// </summary>
	public  partial class IfcAdvancedFace : IfcFaceSurface
	{


		/// <summary>
		/// Construct a IfcAdvancedFace with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAdvancedFace(List<IfcFaceBound> bounds,IfcSurface faceSurface,IfcBoolean sameSense):base(bounds,faceSurface,sameSense)
		{


		}
		public static new IfcAdvancedFace FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAdvancedFace>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Bounds != null ? Bounds.ToStepValue() : "$");
			parameters.Add(FaceSurface != null ? FaceSurface.ToStepValue() : "$");
			parameters.Add(SameSense != null ? SameSense.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
