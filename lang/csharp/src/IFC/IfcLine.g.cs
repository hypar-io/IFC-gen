

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcline.htm"/>
	/// </summary>
	public  partial class IfcLine : IfcCurve
	{
		public IfcCartesianPoint Pnt{get;set;} 
		public IfcVector Dir{get;set;} 


		/// <summary>
		/// Construct a IfcLine with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLine(IfcCartesianPoint pnt,IfcVector dir):base()
		{

			Pnt = pnt;
			Dir = dir;

		}
		public static new IfcLine FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLine>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Pnt != null ? Pnt.ToStepValue() : "$");
			parameters.Add(Dir != null ? Dir.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
