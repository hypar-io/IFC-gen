

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyle.htm"/>
	/// </summary>
	public  partial class IfcSurfaceStyle : IfcPresentationStyle
	{
		public IfcSurfaceSide Side{get;set;} 
		public List<IfcSurfaceStyleElementSelect> Styles{get;set;} 


		/// <summary>
		/// Construct a IfcSurfaceStyle with all required attributes.
		/// </summary>
		public IfcSurfaceStyle(IfcSurfaceSide side,List<IfcSurfaceStyleElementSelect> styles):base()
		{

			Side = side;
			Styles = styles;

		}
		/// <summary>
		/// Construct a IfcSurfaceStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceStyle(IfcLabel name,IfcSurfaceSide side,List<IfcSurfaceStyleElementSelect> styles):base(name)
		{

			Side = side;
			Styles = styles;

		}
		public static new IfcSurfaceStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceStyle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Side != null ? Side.ToStepValue() : "$");
			parameters.Add(Styles != null ? Styles.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
