

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurvesweptareasolid.htm"/>
	/// </summary>
	public  partial class IfcSurfaceCurveSweptAreaSolid : IfcSweptAreaSolid
	{
		public IfcCurve Directrix{get;set;} 
		public IfcParameterValue StartParam{get;set;} // optional
		public IfcParameterValue EndParam{get;set;} // optional
		public IfcSurface ReferenceSurface{get;set;} 


		/// <summary>
		/// Construct a IfcSurfaceCurveSweptAreaSolid with all required attributes.
		/// </summary>
		public IfcSurfaceCurveSweptAreaSolid(IfcProfileDef sweptArea,IfcCurve directrix,IfcSurface referenceSurface):base(sweptArea)
		{

			Directrix = directrix;
			ReferenceSurface = referenceSurface;

		}
		/// <summary>
		/// Construct a IfcSurfaceCurveSweptAreaSolid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceCurveSweptAreaSolid(IfcProfileDef sweptArea,IfcAxis2Placement3D position,IfcCurve directrix,IfcParameterValue startParam,IfcParameterValue endParam,IfcSurface referenceSurface):base(sweptArea,position)
		{

			Directrix = directrix;
			StartParam = startParam;
			EndParam = endParam;
			ReferenceSurface = referenceSurface;

		}
		public static new IfcSurfaceCurveSweptAreaSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceCurveSweptAreaSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptArea != null ? SweptArea.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Directrix != null ? Directrix.ToStepValue() : "$");
			parameters.Add(StartParam != null ? StartParam.ToStepValue() : "$");
			parameters.Add(EndParam != null ? EndParam.ToStepValue() : "$");
			parameters.Add(ReferenceSurface != null ? ReferenceSurface.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
