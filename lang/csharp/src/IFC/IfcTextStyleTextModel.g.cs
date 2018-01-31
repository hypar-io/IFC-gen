

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyletextmodel.htm"/>
	/// </summary>
	public  partial class IfcTextStyleTextModel : IfcPresentationItem
	{
		public IfcSizeSelect TextIndent{get;set;} // optional
		public IfcTextAlignment TextAlign{get;set;} // optional
		public IfcTextDecoration TextDecoration{get;set;} // optional
		public IfcSizeSelect LetterSpacing{get;set;} // optional
		public IfcSizeSelect WordSpacing{get;set;} // optional
		public IfcTextTransformation TextTransform{get;set;} // optional
		public IfcSizeSelect LineHeight{get;set;} // optional


		/// <summary>
		/// Construct a IfcTextStyleTextModel with all required attributes.
		/// </summary>
		public IfcTextStyleTextModel():base()
		{


		}
		/// <summary>
		/// Construct a IfcTextStyleTextModel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextStyleTextModel(IfcSizeSelect textIndent,IfcTextAlignment textAlign,IfcTextDecoration textDecoration,IfcSizeSelect letterSpacing,IfcSizeSelect wordSpacing,IfcTextTransformation textTransform,IfcSizeSelect lineHeight):base()
		{

			TextIndent = textIndent;
			TextAlign = textAlign;
			TextDecoration = textDecoration;
			LetterSpacing = letterSpacing;
			WordSpacing = wordSpacing;
			TextTransform = textTransform;
			LineHeight = lineHeight;

		}
		public static new IfcTextStyleTextModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextStyleTextModel>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TextIndent != null ? TextIndent.ToStepValue() : "$");
			parameters.Add(TextAlign != null ? TextAlign.ToStepValue() : "$");
			parameters.Add(TextDecoration != null ? TextDecoration.ToStepValue() : "$");
			parameters.Add(LetterSpacing != null ? LetterSpacing.ToStepValue() : "$");
			parameters.Add(WordSpacing != null ? WordSpacing.ToStepValue() : "$");
			parameters.Add(TextTransform != null ? TextTransform.ToStepValue() : "$");
			parameters.Add(LineHeight != null ? LineHeight.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
