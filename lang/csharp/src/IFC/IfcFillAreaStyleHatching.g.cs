

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastylehatching.htm"/>
	/// </summary>
	public  partial class IfcFillAreaStyleHatching : IfcGeometricRepresentationItem
	{
		public IfcCurveStyle HatchLineAppearance{get;set;} 
		public IfcHatchLineDistanceSelect StartOfNextHatchLine{get;set;} 
		public IfcCartesianPoint PointOfReferenceHatchLine{get;set;} // optional
		public IfcCartesianPoint PatternStart{get;set;} // optional
		public IfcPlaneAngleMeasure HatchLineAngle{get;set;} 


		/// <summary>
		/// Construct a IfcFillAreaStyleHatching with all required attributes.
		/// </summary>
		public IfcFillAreaStyleHatching(IfcCurveStyle hatchLineAppearance,IfcHatchLineDistanceSelect startOfNextHatchLine,IfcPlaneAngleMeasure hatchLineAngle):base()
		{

			HatchLineAppearance = hatchLineAppearance;
			StartOfNextHatchLine = startOfNextHatchLine;
			HatchLineAngle = hatchLineAngle;

		}
		/// <summary>
		/// Construct a IfcFillAreaStyleHatching with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFillAreaStyleHatching(IfcCurveStyle hatchLineAppearance,IfcHatchLineDistanceSelect startOfNextHatchLine,IfcCartesianPoint pointOfReferenceHatchLine,IfcCartesianPoint patternStart,IfcPlaneAngleMeasure hatchLineAngle):base()
		{

			HatchLineAppearance = hatchLineAppearance;
			StartOfNextHatchLine = startOfNextHatchLine;
			PointOfReferenceHatchLine = pointOfReferenceHatchLine;
			PatternStart = patternStart;
			HatchLineAngle = hatchLineAngle;

		}
		public static new IfcFillAreaStyleHatching FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFillAreaStyleHatching>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(HatchLineAppearance != null ? HatchLineAppearance.ToStepValue() : "$");
			parameters.Add(StartOfNextHatchLine != null ? StartOfNextHatchLine.ToStepValue() : "$");
			parameters.Add(PointOfReferenceHatchLine != null ? PointOfReferenceHatchLine.ToStepValue() : "$");
			parameters.Add(PatternStart != null ? PatternStart.ToStepValue() : "$");
			parameters.Add(HatchLineAngle != null ? HatchLineAngle.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
