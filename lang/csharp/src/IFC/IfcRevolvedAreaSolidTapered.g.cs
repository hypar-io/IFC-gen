

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrevolvedareasolidtapered.htm"/>
	/// </summary>
	public  partial class IfcRevolvedAreaSolidTapered : IfcRevolvedAreaSolid
	{
		public IfcProfileDef EndSweptArea{get;set;} 


		/// <summary>
		/// Construct a IfcRevolvedAreaSolidTapered with all required attributes.
		/// </summary>
		public IfcRevolvedAreaSolidTapered(IfcProfileDef sweptArea,IfcAxis1Placement axis,IfcPlaneAngleMeasure angle,IfcProfileDef endSweptArea):base(sweptArea,axis,angle)
		{

			EndSweptArea = endSweptArea;

		}
		/// <summary>
		/// Construct a IfcRevolvedAreaSolidTapered with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRevolvedAreaSolidTapered(IfcProfileDef sweptArea,IfcAxis2Placement3D position,IfcAxis1Placement axis,IfcPlaneAngleMeasure angle,IfcProfileDef endSweptArea):base(sweptArea,position,axis,angle)
		{

			EndSweptArea = endSweptArea;

		}
		public static new IfcRevolvedAreaSolidTapered FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRevolvedAreaSolidTapered>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptArea != null ? SweptArea.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Axis != null ? Axis.ToStepValue() : "$");
			parameters.Add(Angle != null ? Angle.ToStepValue() : "$");
			parameters.Add(EndSweptArea != null ? EndSweptArea.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
