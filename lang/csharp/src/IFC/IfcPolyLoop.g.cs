

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyloop.htm"/>
	/// </summary>
	public  partial class IfcPolyLoop : IfcLoop
	{
		public List<IfcCartesianPoint> Polygon{get;set;} 


		/// <summary>
		/// Construct a IfcPolyLoop with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPolyLoop(List<IfcCartesianPoint> polygon):base()
		{

			Polygon = polygon;

		}
		public static new IfcPolyLoop FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPolyLoop>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Polygon != null ? Polygon.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
