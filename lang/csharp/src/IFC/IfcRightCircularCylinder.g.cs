

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrightcircularcylinder.htm"/>
	/// </summary>
	public  partial class IfcRightCircularCylinder : IfcCsgPrimitive3D
	{
		public IfcPositiveLengthMeasure Height{get;set;} 
		public IfcPositiveLengthMeasure Radius{get;set;} 


		/// <summary>
		/// Construct a IfcRightCircularCylinder with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRightCircularCylinder(IfcAxis2Placement3D position,IfcPositiveLengthMeasure height,IfcPositiveLengthMeasure radius):base(position)
		{

			Height = height;
			Radius = radius;

		}
		public static new IfcRightCircularCylinder FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRightCircularCylinder>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Height != null ? Height.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
