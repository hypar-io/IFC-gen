

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointeccentricity.htm"/>
	/// </summary>
	public  partial class IfcConnectionPointEccentricity : IfcConnectionPointGeometry
	{
		public IfcLengthMeasure EccentricityInX{get;set;} // optional
		public IfcLengthMeasure EccentricityInY{get;set;} // optional
		public IfcLengthMeasure EccentricityInZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcConnectionPointEccentricity with all required attributes.
		/// </summary>
		public IfcConnectionPointEccentricity(IfcPointOrVertexPoint pointOnRelatingElement):base(pointOnRelatingElement)
		{


		}
		/// <summary>
		/// Construct a IfcConnectionPointEccentricity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectionPointEccentricity(IfcPointOrVertexPoint pointOnRelatingElement,IfcPointOrVertexPoint pointOnRelatedElement,IfcLengthMeasure eccentricityInX,IfcLengthMeasure eccentricityInY,IfcLengthMeasure eccentricityInZ):base(pointOnRelatingElement,pointOnRelatedElement)
		{

			EccentricityInX = eccentricityInX;
			EccentricityInY = eccentricityInY;
			EccentricityInZ = eccentricityInZ;

		}
		public static new IfcConnectionPointEccentricity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectionPointEccentricity>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(PointOnRelatingElement != null ? PointOnRelatingElement.ToStepValue() : "$");
			parameters.Add(PointOnRelatedElement != null ? PointOnRelatedElement.ToStepValue() : "$");
			parameters.Add(EccentricityInX != null ? EccentricityInX.ToStepValue() : "$");
			parameters.Add(EccentricityInY != null ? EccentricityInY.ToStepValue() : "$");
			parameters.Add(EccentricityInZ != null ? EccentricityInZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
