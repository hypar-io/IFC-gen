

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsphericalsurface.htm"/>
	/// </summary>
	public  partial class IfcSphericalSurface : IfcElementarySurface
	{
		public IfcPositiveLengthMeasure Radius{get;set;} 


		/// <summary>
		/// Construct a IfcSphericalSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSphericalSurface(IfcAxis2Placement3D position,IfcPositiveLengthMeasure radius):base(position)
		{

			Radius = radius;

		}
		public static new IfcSphericalSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSphericalSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Radius != null ? Radius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
