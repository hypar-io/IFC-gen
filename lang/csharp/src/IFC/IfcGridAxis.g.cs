

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridaxis.htm"/>
	/// </summary>
	public  partial class IfcGridAxis : BaseIfc
	{
		public IfcLabel AxisTag{get;set;} // optional
		public IfcCurve AxisCurve{get;set;} 
		public IfcBoolean SameSense{get;set;} 
		public List<IfcGrid> PartOfW{get;set;} // inverse
		public List<IfcGrid> PartOfV{get;set;} // inverse
		public List<IfcGrid> PartOfU{get;set;} // inverse
		public List<IfcVirtualGridIntersection> HasIntersections{get;set;} // inverse


		/// <summary>
		/// Construct a IfcGridAxis with all required attributes.
		/// </summary>
		public IfcGridAxis(IfcCurve axisCurve,IfcBoolean sameSense):base()
		{
			PartOfW = new List<IfcGrid>();
			PartOfV = new List<IfcGrid>();
			PartOfU = new List<IfcGrid>();
			HasIntersections = new List<IfcVirtualGridIntersection>();

			AxisCurve = axisCurve;
			SameSense = sameSense;

		}
		/// <summary>
		/// Construct a IfcGridAxis with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGridAxis(IfcLabel axisTag,IfcCurve axisCurve,IfcBoolean sameSense):base()
		{
			PartOfW = new List<IfcGrid>();
			PartOfV = new List<IfcGrid>();
			PartOfU = new List<IfcGrid>();
			HasIntersections = new List<IfcVirtualGridIntersection>();

			AxisTag = axisTag;
			AxisCurve = axisCurve;
			SameSense = sameSense;

		}
		public static  IfcGridAxis FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGridAxis>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(AxisTag != null ? AxisTag.ToStepValue() : "$");
			parameters.Add(AxisCurve != null ? AxisCurve.ToStepValue() : "$");
			parameters.Add(SameSense != null ? SameSense.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
