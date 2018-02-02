

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist2d.htm"/>
	/// </summary>
	public  partial class IfcCartesianPointList2D : IfcCartesianPointList
	{
		public List<List<IfcLengthMeasure>> CoordList{get;set;} 


		/// <summary>
		/// Construct a IfcCartesianPointList2D with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianPointList2D(List<List<IfcLengthMeasure>> coordList):base()
		{

			CoordList = coordList;

		}
		public static new IfcCartesianPointList2D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianPointList2D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CoordList != null ? CoordList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
