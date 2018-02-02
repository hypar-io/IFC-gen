

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestyle.htm"/>
	/// </summary>
	public  partial class IfcCurveStyle : IfcPresentationStyle
	{
		public IfcCurveFontOrScaledCurveFontSelect CurveFont{get;set;} // optional
		public IfcSizeSelect CurveWidth{get;set;} // optional
		public IfcColour CurveColour{get;set;} // optional
		public IfcBoolean ModelOrDraughting{get;set;} // optional


		/// <summary>
		/// Construct a IfcCurveStyle with all required attributes.
		/// </summary>
		public IfcCurveStyle():base()
		{


		}
		/// <summary>
		/// Construct a IfcCurveStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurveStyle(IfcLabel name,IfcCurveFontOrScaledCurveFontSelect curveFont,IfcSizeSelect curveWidth,IfcColour curveColour,IfcBoolean modelOrDraughting):base(name)
		{

			CurveFont = curveFont;
			CurveWidth = curveWidth;
			CurveColour = curveColour;
			ModelOrDraughting = modelOrDraughting;

		}
		public static new IfcCurveStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurveStyle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(CurveFont != null ? CurveFont.ToStepValue() : "$");
			parameters.Add(CurveWidth != null ? CurveWidth.ToStepValue() : "$");
			parameters.Add(CurveColour != null ? CurveColour.ToStepValue() : "$");
			parameters.Add(ModelOrDraughting != null ? ModelOrDraughting.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
