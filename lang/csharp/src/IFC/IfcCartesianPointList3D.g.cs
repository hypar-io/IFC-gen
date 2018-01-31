

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist3d.htm"/>
	/// </summary>
	public  partial class IfcCartesianPointList3D : IfcCartesianPointList
	{
		public List<List<IfcLengthMeasure>> CoordList{get;set;} 


		/// <summary>
		/// Construct a IfcCartesianPointList3D with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianPointList3D(List<List<IfcLengthMeasure>> coordList):base()
		{

			CoordList = coordList;

		}
		public static new IfcCartesianPointList3D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianPointList3D>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CoordList != null ? CoordList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
