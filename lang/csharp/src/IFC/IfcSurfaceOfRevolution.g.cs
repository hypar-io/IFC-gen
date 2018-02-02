

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfaceofrevolution.htm"/>
	/// </summary>
	public  partial class IfcSurfaceOfRevolution : IfcSweptSurface
	{
		public IfcAxis1Placement AxisPosition{get;set;} 

        [JsonIgnore]
        public IfcLine AxisLine{get{throw new NotImplementedException($"Derived property logic has been implemented for AxisLine.");}} // derived


		/// <summary>
		/// Construct a IfcSurfaceOfRevolution with all required attributes.
		/// </summary>
		public IfcSurfaceOfRevolution(IfcProfileDef sweptCurve,IfcAxis1Placement axisPosition):base(sweptCurve)
		{

			AxisPosition = axisPosition;

		}
		/// <summary>
		/// Construct a IfcSurfaceOfRevolution with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceOfRevolution(IfcProfileDef sweptCurve,IfcAxis2Placement3D position,IfcAxis1Placement axisPosition):base(sweptCurve,position)
		{

			AxisPosition = axisPosition;

		}
		public static new IfcSurfaceOfRevolution FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceOfRevolution>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptCurve != null ? SweptCurve.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(AxisPosition != null ? AxisPosition.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
