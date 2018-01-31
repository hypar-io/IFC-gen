

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontandscaling.htm"/>
	/// </summary>
	public  partial class IfcCurveStyleFontAndScaling : IfcPresentationItem
	{
		public IfcLabel Name{get;set;} // optional
		public IfcCurveStyleFontSelect CurveFont{get;set;} 
		public IfcPositiveRatioMeasure CurveFontScaling{get;set;} 


		/// <summary>
		/// Construct a IfcCurveStyleFontAndScaling with all required attributes.
		/// </summary>
		public IfcCurveStyleFontAndScaling(IfcCurveStyleFontSelect curveFont,IfcPositiveRatioMeasure curveFontScaling):base()
		{

			CurveFont = curveFont;
			CurveFontScaling = curveFontScaling;

		}
		/// <summary>
		/// Construct a IfcCurveStyleFontAndScaling with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurveStyleFontAndScaling(IfcLabel name,IfcCurveStyleFontSelect curveFont,IfcPositiveRatioMeasure curveFontScaling):base()
		{

			Name = name;
			CurveFont = curveFont;
			CurveFontScaling = curveFontScaling;

		}
		public static new IfcCurveStyleFontAndScaling FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurveStyleFontAndScaling>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(CurveFont != null ? CurveFont.ToStepValue() : "$");
			parameters.Add(CurveFontScaling != null ? CurveFontScaling.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
