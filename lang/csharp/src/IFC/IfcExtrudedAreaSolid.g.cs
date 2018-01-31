

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextrudedareasolid.htm"/>
	/// </summary>
	public  partial class IfcExtrudedAreaSolid : IfcSweptAreaSolid
	{
		public IfcDirection ExtrudedDirection{get;set;} 
		public IfcPositiveLengthMeasure Depth{get;set;} 


		/// <summary>
		/// Construct a IfcExtrudedAreaSolid with all required attributes.
		/// </summary>
		public IfcExtrudedAreaSolid(IfcProfileDef sweptArea,IfcDirection extrudedDirection,IfcPositiveLengthMeasure depth):base(sweptArea)
		{

			ExtrudedDirection = extrudedDirection;
			Depth = depth;

		}
		/// <summary>
		/// Construct a IfcExtrudedAreaSolid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExtrudedAreaSolid(IfcProfileDef sweptArea,IfcAxis2Placement3D position,IfcDirection extrudedDirection,IfcPositiveLengthMeasure depth):base(sweptArea,position)
		{

			ExtrudedDirection = extrudedDirection;
			Depth = depth;

		}
		public static new IfcExtrudedAreaSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExtrudedAreaSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptArea != null ? SweptArea.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(ExtrudedDirection != null ? ExtrudedDirection.ToStepValue() : "$");
			parameters.Add(Depth != null ? Depth.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
