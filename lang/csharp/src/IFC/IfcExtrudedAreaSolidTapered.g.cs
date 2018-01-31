

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolidtapered.htm"/>
	/// </summary>
	public  partial class IfcExtrudedAreaSolidTapered : IfcExtrudedAreaSolid
	{
		public IfcProfileDef EndSweptArea{get;set;} 


		/// <summary>
		/// Construct a IfcExtrudedAreaSolidTapered with all required attributes.
		/// </summary>
		public IfcExtrudedAreaSolidTapered(IfcProfileDef sweptArea,IfcDirection extrudedDirection,IfcPositiveLengthMeasure depth,IfcProfileDef endSweptArea):base(sweptArea,extrudedDirection,depth)
		{

			EndSweptArea = endSweptArea;

		}
		/// <summary>
		/// Construct a IfcExtrudedAreaSolidTapered with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExtrudedAreaSolidTapered(IfcProfileDef sweptArea,IfcAxis2Placement3D position,IfcDirection extrudedDirection,IfcPositiveLengthMeasure depth,IfcProfileDef endSweptArea):base(sweptArea,position,extrudedDirection,depth)
		{

			EndSweptArea = endSweptArea;

		}
		public static new IfcExtrudedAreaSolidTapered FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExtrudedAreaSolidTapered>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptArea != null ? SweptArea.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(ExtrudedDirection != null ? ExtrudedDirection.ToStepValue() : "$");
			parameters.Add(Depth != null ? Depth.ToStepValue() : "$");
			parameters.Add(EndSweptArea != null ? EndSweptArea.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
