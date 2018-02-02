

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyline.htm"/>
	/// </summary>
	public  partial class IfcPolyline : IfcBoundedCurve
	{
		public List<IfcCartesianPoint> Points{get;set;} 


		/// <summary>
		/// Construct a IfcPolyline with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPolyline(List<IfcCartesianPoint> points):base()
		{

			Points = points;

		}
		public static new IfcPolyline FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPolyline>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Points != null ? Points.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
