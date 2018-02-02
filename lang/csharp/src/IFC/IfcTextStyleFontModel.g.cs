

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefontmodel.htm"/>
	/// </summary>
	public  partial class IfcTextStyleFontModel : IfcPreDefinedTextFont
	{
		public List<IfcTextFontName> FontFamily{get;set;} 
		public IfcFontStyle FontStyle{get;set;} // optional
		public IfcFontVariant FontVariant{get;set;} // optional
		public IfcFontWeight FontWeight{get;set;} // optional
		public IfcSizeSelect FontSize{get;set;} 


		/// <summary>
		/// Construct a IfcTextStyleFontModel with all required attributes.
		/// </summary>
		public IfcTextStyleFontModel(IfcLabel name,List<IfcTextFontName> fontFamily,IfcSizeSelect fontSize):base(name)
		{

			FontFamily = fontFamily;
			FontSize = fontSize;

		}
		/// <summary>
		/// Construct a IfcTextStyleFontModel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextStyleFontModel(IfcLabel name,List<IfcTextFontName> fontFamily,IfcFontStyle fontStyle,IfcFontVariant fontVariant,IfcFontWeight fontWeight,IfcSizeSelect fontSize):base(name)
		{

			FontFamily = fontFamily;
			FontStyle = fontStyle;
			FontVariant = fontVariant;
			FontWeight = fontWeight;
			FontSize = fontSize;

		}
		public static new IfcTextStyleFontModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextStyleFontModel>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(FontFamily != null ? FontFamily.ToStepValue() : "$");
			parameters.Add(FontStyle != null ? FontStyle.ToStepValue() : "$");
			parameters.Add(FontVariant != null ? FontVariant.ToStepValue() : "$");
			parameters.Add(FontWeight != null ? FontWeight.ToStepValue() : "$");
			parameters.Add(FontSize != null ? FontSize.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
