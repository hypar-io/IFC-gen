

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctoroidalsurface.htm"/>
	/// </summary>
	public  partial class IfcToroidalSurface : IfcElementarySurface
	{
		public IfcPositiveLengthMeasure MajorRadius{get;set;} 
		public IfcPositiveLengthMeasure MinorRadius{get;set;} 


		/// <summary>
		/// Construct a IfcToroidalSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcToroidalSurface(IfcAxis2Placement3D position,IfcPositiveLengthMeasure majorRadius,IfcPositiveLengthMeasure minorRadius):base(position)
		{

			MajorRadius = majorRadius;
			MinorRadius = minorRadius;

		}
		public static new IfcToroidalSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcToroidalSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(MajorRadius != null ? MajorRadius.ToStepValue() : "$");
			parameters.Add(MinorRadius != null ? MinorRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
