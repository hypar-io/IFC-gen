

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmapconversion.htm"/>
	/// </summary>
	public  partial class IfcMapConversion : IfcCoordinateOperation
	{
		public IfcLengthMeasure Eastings{get;set;} 
		public IfcLengthMeasure Northings{get;set;} 
		public IfcLengthMeasure OrthogonalHeight{get;set;} 
		public IfcReal XAxisAbscissa{get;set;} // optional
		public IfcReal XAxisOrdinate{get;set;} // optional
		public IfcReal Scale{get;set;} // optional


		/// <summary>
		/// Construct a IfcMapConversion with all required attributes.
		/// </summary>
		public IfcMapConversion(IfcCoordinateReferenceSystemSelect sourceCRS,IfcCoordinateReferenceSystem targetCRS,IfcLengthMeasure eastings,IfcLengthMeasure northings,IfcLengthMeasure orthogonalHeight):base(sourceCRS,targetCRS)
		{

			Eastings = eastings;
			Northings = northings;
			OrthogonalHeight = orthogonalHeight;

		}
		/// <summary>
		/// Construct a IfcMapConversion with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMapConversion(IfcCoordinateReferenceSystemSelect sourceCRS,IfcCoordinateReferenceSystem targetCRS,IfcLengthMeasure eastings,IfcLengthMeasure northings,IfcLengthMeasure orthogonalHeight,IfcReal xAxisAbscissa,IfcReal xAxisOrdinate,IfcReal scale):base(sourceCRS,targetCRS)
		{

			Eastings = eastings;
			Northings = northings;
			OrthogonalHeight = orthogonalHeight;
			XAxisAbscissa = xAxisAbscissa;
			XAxisOrdinate = xAxisOrdinate;
			Scale = scale;

		}
		public static new IfcMapConversion FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMapConversion>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SourceCRS != null ? SourceCRS.ToStepValue() : "$");
			parameters.Add(TargetCRS != null ? TargetCRS.ToStepValue() : "$");
			parameters.Add(Eastings != null ? Eastings.ToStepValue() : "$");
			parameters.Add(Northings != null ? Northings.ToStepValue() : "$");
			parameters.Add(OrthogonalHeight != null ? OrthogonalHeight.ToStepValue() : "$");
			parameters.Add(XAxisAbscissa != null ? XAxisAbscissa.ToStepValue() : "$");
			parameters.Add(XAxisOrdinate != null ? XAxisOrdinate.ToStepValue() : "$");
			parameters.Add(Scale != null ? Scale.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
