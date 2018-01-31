

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolycurve.htm"/>
	/// </summary>
	public  partial class IfcIndexedPolyCurve : IfcBoundedCurve
	{
		public IfcCartesianPointList Points{get;set;} 
		public List<IfcSegmentIndexSelect> Segments{get;set;} // optional
		public IfcBoolean SelfIntersect{get;set;} // optional


		/// <summary>
		/// Construct a IfcIndexedPolyCurve with all required attributes.
		/// </summary>
		public IfcIndexedPolyCurve(IfcCartesianPointList points):base()
		{
			Segments = new List<IfcSegmentIndexSelect>();

			Points = points;

		}
		/// <summary>
		/// Construct a IfcIndexedPolyCurve with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIndexedPolyCurve(IfcCartesianPointList points,List<IfcSegmentIndexSelect> segments,IfcBoolean selfIntersect):base()
		{

			Points = points;
			Segments = segments;
			SelfIntersect = selfIntersect;

		}
		public static new IfcIndexedPolyCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIndexedPolyCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Points != null ? Points.ToStepValue() : "$");
			parameters.Add(Segments != null ? Segments.ToStepValue() : "$");
			parameters.Add(SelfIntersect != null ? SelfIntersect.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
