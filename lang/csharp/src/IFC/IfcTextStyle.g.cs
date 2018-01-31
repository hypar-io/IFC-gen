

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyle.htm"/>
	/// </summary>
	public  partial class IfcTextStyle : IfcPresentationStyle
	{
		public IfcTextStyleForDefinedFont TextCharacterAppearance{get;set;} // optional
		public IfcTextStyleTextModel TextStyle{get;set;} // optional
		public IfcTextFontSelect TextFontStyle{get;set;} 
		public IfcBoolean ModelOrDraughting{get;set;} // optional


		/// <summary>
		/// Construct a IfcTextStyle with all required attributes.
		/// </summary>
		public IfcTextStyle(IfcTextFontSelect textFontStyle):base()
		{

			TextFontStyle = textFontStyle;

		}
		/// <summary>
		/// Construct a IfcTextStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextStyle(IfcLabel name,IfcTextStyleForDefinedFont textCharacterAppearance,IfcTextStyleTextModel textStyle,IfcTextFontSelect textFontStyle,IfcBoolean modelOrDraughting):base(name)
		{

			TextCharacterAppearance = textCharacterAppearance;
			TextStyle = textStyle;
			TextFontStyle = textFontStyle;
			ModelOrDraughting = modelOrDraughting;

		}
		public static new IfcTextStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextStyle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(TextCharacterAppearance != null ? TextCharacterAppearance.ToStepValue() : "$");
			parameters.Add(TextStyle != null ? TextStyle.ToStepValue() : "$");
			parameters.Add(TextFontStyle != null ? TextFontStyle.ToStepValue() : "$");
			parameters.Add(ModelOrDraughting != null ? ModelOrDraughting.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
