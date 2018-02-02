

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcone.htm"/>
	/// </summary>
	public  partial class IfcRightCircularCone : IfcCsgPrimitive3D
	{
		public IfcPositiveLengthMeasure Height{get;set;} 
		public IfcPositiveLengthMeasure BottomRadius{get;set;} 


		/// <summary>
		/// Construct a IfcRightCircularCone with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRightCircularCone(IfcAxis2Placement3D position,IfcPositiveLengthMeasure height,IfcPositiveLengthMeasure bottomRadius):base(position)
		{

			Height = height;
			BottomRadius = bottomRadius;

		}
		public static new IfcRightCircularCone FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRightCircularCone>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Height != null ? Height.ToStepValue() : "$");
			parameters.Add(BottomRadius != null ? BottomRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
