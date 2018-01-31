

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangularpyramid.htm"/>
	/// </summary>
	public  partial class IfcRectangularPyramid : IfcCsgPrimitive3D
	{
		public IfcPositiveLengthMeasure XLength{get;set;} 
		public IfcPositiveLengthMeasure YLength{get;set;} 
		public IfcPositiveLengthMeasure Height{get;set;} 


		/// <summary>
		/// Construct a IfcRectangularPyramid with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRectangularPyramid(IfcAxis2Placement3D position,IfcPositiveLengthMeasure xLength,IfcPositiveLengthMeasure yLength,IfcPositiveLengthMeasure height):base(position)
		{

			XLength = xLength;
			YLength = yLength;
			Height = height;

		}
		public static new IfcRectangularPyramid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRectangularPyramid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(XLength != null ? XLength.ToStepValue() : "$");
			parameters.Add(YLength != null ? YLength.ToStepValue() : "$");
			parameters.Add(Height != null ? Height.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
