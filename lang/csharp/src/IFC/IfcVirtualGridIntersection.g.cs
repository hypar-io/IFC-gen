

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm"/>
	/// </summary>
	public  partial class IfcVirtualGridIntersection : BaseIfc
	{
		public List<IfcGridAxis> IntersectingAxes{get;set;} 
		public List<IfcLengthMeasure> OffsetDistances{get;set;} 


		/// <summary>
		/// Construct a IfcVirtualGridIntersection with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcVirtualGridIntersection(List<IfcGridAxis> intersectingAxes,List<IfcLengthMeasure> offsetDistances):base()
		{

			IntersectingAxes = intersectingAxes;
			OffsetDistances = offsetDistances;

		}
		public static  IfcVirtualGridIntersection FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVirtualGridIntersection>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(IntersectingAxes != null ? IntersectingAxes.ToStepValue() : "$");
			parameters.Add(OffsetDistances != null ? OffsetDistances.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
