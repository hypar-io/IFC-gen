

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceoflinearextrusion.htm"/>
	/// </summary>
	public  partial class IfcSurfaceOfLinearExtrusion : IfcSweptSurface
	{
		public IfcDirection ExtrudedDirection{get;set;} 
		public IfcLengthMeasure Depth{get;set;} 

        [JsonIgnore]
        public IfcVector ExtrusionAxis{get{throw new NotImplementedException($"Derived property logic has been implemented for ExtrusionAxis.");}} // derived


		/// <summary>
		/// Construct a IfcSurfaceOfLinearExtrusion with all required attributes.
		/// </summary>
		public IfcSurfaceOfLinearExtrusion(IfcProfileDef sweptCurve,IfcDirection extrudedDirection,IfcLengthMeasure depth):base(sweptCurve)
		{

			ExtrudedDirection = extrudedDirection;
			Depth = depth;

		}
		/// <summary>
		/// Construct a IfcSurfaceOfLinearExtrusion with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceOfLinearExtrusion(IfcProfileDef sweptCurve,IfcAxis2Placement3D position,IfcDirection extrudedDirection,IfcLengthMeasure depth):base(sweptCurve,position)
		{

			ExtrudedDirection = extrudedDirection;
			Depth = depth;

		}
		public static new IfcSurfaceOfLinearExtrusion FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceOfLinearExtrusion>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptCurve != null ? SweptCurve.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(ExtrudedDirection != null ? ExtrudedDirection.ToStepValue() : "$");
			parameters.Add(Depth != null ? Depth.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
