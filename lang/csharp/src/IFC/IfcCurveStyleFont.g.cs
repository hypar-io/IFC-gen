

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefont.htm"/>
	/// </summary>
	public  partial class IfcCurveStyleFont : IfcPresentationItem
	{
		public IfcLabel Name{get;set;} // optional
		public List<IfcCurveStyleFontPattern> PatternList{get;set;} 


		/// <summary>
		/// Construct a IfcCurveStyleFont with all required attributes.
		/// </summary>
		public IfcCurveStyleFont(List<IfcCurveStyleFontPattern> patternList):base()
		{

			PatternList = patternList;

		}
		/// <summary>
		/// Construct a IfcCurveStyleFont with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurveStyleFont(IfcLabel name,List<IfcCurveStyleFontPattern> patternList):base()
		{

			Name = name;
			PatternList = patternList;

		}
		public static new IfcCurveStyleFont FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurveStyleFont>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(PatternList != null ? PatternList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
