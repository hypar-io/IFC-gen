

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplanarextent.htm"/>
	/// </summary>
	public  partial class IfcPlanarExtent : IfcGeometricRepresentationItem
	{
		public IfcLengthMeasure SizeInX{get;set;} 
		public IfcLengthMeasure SizeInY{get;set;} 


		/// <summary>
		/// Construct a IfcPlanarExtent with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPlanarExtent(IfcLengthMeasure sizeInX,IfcLengthMeasure sizeInY):base()
		{

			SizeInX = sizeInX;
			SizeInY = sizeInY;

		}
		public static new IfcPlanarExtent FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPlanarExtent>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SizeInX != null ? SizeInX.ToStepValue() : "$");
			parameters.Add(SizeInY != null ? SizeInY.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
