

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontpattern.htm"/>
	/// </summary>
	public  partial class IfcCurveStyleFontPattern : IfcPresentationItem
	{
		public IfcLengthMeasure VisibleSegmentLength{get;set;} 
		public IfcPositiveLengthMeasure InvisibleSegmentLength{get;set;} 


		/// <summary>
		/// Construct a IfcCurveStyleFontPattern with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurveStyleFontPattern(IfcLengthMeasure visibleSegmentLength,IfcPositiveLengthMeasure invisibleSegmentLength):base()
		{

			VisibleSegmentLength = visibleSegmentLength;
			InvisibleSegmentLength = invisibleSegmentLength;

		}
		public static new IfcCurveStyleFontPattern FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurveStyleFontPattern>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(VisibleSegmentLength != null ? VisibleSegmentLength.ToStepValue() : "$");
			parameters.Add(InvisibleSegmentLength != null ? InvisibleSegmentLength.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
