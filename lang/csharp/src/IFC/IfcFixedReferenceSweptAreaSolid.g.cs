

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfixedreferencesweptareasolid.htm"/>
	/// </summary>
	public  partial class IfcFixedReferenceSweptAreaSolid : IfcSweptAreaSolid
	{
		public IfcCurve Directrix{get;set;} 
		public IfcParameterValue StartParam{get;set;} // optional
		public IfcParameterValue EndParam{get;set;} // optional
		public IfcDirection FixedReference{get;set;} 


		/// <summary>
		/// Construct a IfcFixedReferenceSweptAreaSolid with all required attributes.
		/// </summary>
		public IfcFixedReferenceSweptAreaSolid(IfcProfileDef sweptArea,IfcCurve directrix,IfcDirection fixedReference):base(sweptArea)
		{

			Directrix = directrix;
			FixedReference = fixedReference;

		}
		/// <summary>
		/// Construct a IfcFixedReferenceSweptAreaSolid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFixedReferenceSweptAreaSolid(IfcProfileDef sweptArea,IfcAxis2Placement3D position,IfcCurve directrix,IfcParameterValue startParam,IfcParameterValue endParam,IfcDirection fixedReference):base(sweptArea,position)
		{

			Directrix = directrix;
			StartParam = startParam;
			EndParam = endParam;
			FixedReference = fixedReference;

		}
		public static new IfcFixedReferenceSweptAreaSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFixedReferenceSweptAreaSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SweptArea != null ? SweptArea.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Directrix != null ? Directrix.ToStepValue() : "$");
			parameters.Add(StartParam != null ? StartParam.ToStepValue() : "$");
			parameters.Add(EndParam != null ? EndParam.ToStepValue() : "$");
			parameters.Add(FixedReference != null ? FixedReference.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
