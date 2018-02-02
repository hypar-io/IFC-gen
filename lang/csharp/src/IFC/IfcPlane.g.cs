

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplane.htm"/>
	/// </summary>
	public  partial class IfcPlane : IfcElementarySurface
	{


		/// <summary>
		/// Construct a IfcPlane with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPlane(IfcAxis2Placement3D position):base(position)
		{


		}
		public static new IfcPlane FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPlane>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
