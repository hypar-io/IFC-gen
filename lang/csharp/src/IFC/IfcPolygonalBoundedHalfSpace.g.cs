

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalboundedhalfspace.htm"/>
	/// </summary>
	public  partial class IfcPolygonalBoundedHalfSpace : IfcHalfSpaceSolid
	{
		public IfcAxis2Placement3D Position{get;set;} 
		public IfcBoundedCurve PolygonalBoundary{get;set;} 


		/// <summary>
		/// Construct a IfcPolygonalBoundedHalfSpace with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPolygonalBoundedHalfSpace(IfcSurface baseSurface,IfcBoolean agreementFlag,IfcAxis2Placement3D position,IfcBoundedCurve polygonalBoundary):base(baseSurface,agreementFlag)
		{

			Position = position;
			PolygonalBoundary = polygonalBoundary;

		}
		public static new IfcPolygonalBoundedHalfSpace FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPolygonalBoundedHalfSpace>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BaseSurface != null ? BaseSurface.ToStepValue() : "$");
			parameters.Add(AgreementFlag != null ? AgreementFlag.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(PolygonalBoundary != null ? PolygonalBoundary.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
