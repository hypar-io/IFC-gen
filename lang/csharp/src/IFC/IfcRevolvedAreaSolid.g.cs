

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolid.htm"/>
	/// </summary>
	public  partial class IfcRevolvedAreaSolid : IfcSweptAreaSolid
	{
		public IfcAxis1Placement Axis{get;set;} 
		public IfcPlaneAngleMeasure Angle{get;set;} 

        [JsonIgnore]
        public IfcLine AxisLine{get{throw new NotImplementedException($"Derived property logic has been implemented for AxisLine.");}} // derived


		/// <summary>
		/// Construct a IfcRevolvedAreaSolid with all required attributes.
		/// </summary>
		public IfcRevolvedAreaSolid(IfcProfileDef sweptArea,IfcAxis1Placement axis,IfcPlaneAngleMeasure angle):base(sweptArea)
		{

			Axis = axis;
			Angle = angle;

		}
		/// <summary>
		/// Construct a IfcRevolvedAreaSolid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRevolvedAreaSolid(IfcProfileDef sweptArea,IfcAxis2Placement3D position,IfcAxis1Placement axis,IfcPlaneAngleMeasure angle):base(sweptArea,position)
		{

			Axis = axis;
			Angle = angle;

		}
		public static new IfcRevolvedAreaSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRevolvedAreaSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptArea != null ? SweptArea.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Axis != null ? Axis.ToStepValue() : "$");
			parameters.Add(Angle != null ? Angle.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
