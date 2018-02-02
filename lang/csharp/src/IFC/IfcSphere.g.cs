

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsphere.htm"/>
	/// </summary>
	public  partial class IfcSphere : IfcCsgPrimitive3D
	{
		public IfcPositiveLengthMeasure Radius{get;set;} 


		/// <summary>
		/// Construct a IfcSphere with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSphere(IfcAxis2Placement3D position,IfcPositiveLengthMeasure radius):base(position)
		{

			Radius = radius;

		}
		public static new IfcSphere FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSphere>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
