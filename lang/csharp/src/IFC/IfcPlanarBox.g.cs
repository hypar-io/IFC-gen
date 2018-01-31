

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarbox.htm"/>
	/// </summary>
	public  partial class IfcPlanarBox : IfcPlanarExtent
	{
		public IfcAxis2Placement Placement{get;set;} 


		/// <summary>
		/// Construct a IfcPlanarBox with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPlanarBox(IfcLengthMeasure sizeInX,IfcLengthMeasure sizeInY,IfcAxis2Placement placement):base(sizeInX,sizeInY)
		{

			Placement = placement;

		}
		public static new IfcPlanarBox FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPlanarBox>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SizeInX != null ? SizeInX.ToStepValue() : "$");
			parameters.Add(SizeInY != null ? SizeInY.ToStepValue() : "$");
			parameters.Add(Placement != null ? Placement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
