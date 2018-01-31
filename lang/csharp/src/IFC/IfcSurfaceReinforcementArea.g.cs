

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacereinforcementarea.htm"/>
	/// </summary>
	public  partial class IfcSurfaceReinforcementArea : IfcStructuralLoadOrResult
	{
		public List<IfcLengthMeasure> SurfaceReinforcement1{get;set;} // optional
		public List<IfcLengthMeasure> SurfaceReinforcement2{get;set;} // optional
		public IfcRatioMeasure ShearReinforcement{get;set;} // optional


		/// <summary>
		/// Construct a IfcSurfaceReinforcementArea with all required attributes.
		/// </summary>
		public IfcSurfaceReinforcementArea():base()
		{
			SurfaceReinforcement1 = new List<IfcLengthMeasure>();
			SurfaceReinforcement2 = new List<IfcLengthMeasure>();


		}
		/// <summary>
		/// Construct a IfcSurfaceReinforcementArea with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceReinforcementArea(IfcLabel name,List<IfcLengthMeasure> surfaceReinforcement1,List<IfcLengthMeasure> surfaceReinforcement2,IfcRatioMeasure shearReinforcement):base(name)
		{

			SurfaceReinforcement1 = surfaceReinforcement1;
			SurfaceReinforcement2 = surfaceReinforcement2;
			ShearReinforcement = shearReinforcement;

		}
		public static new IfcSurfaceReinforcementArea FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceReinforcementArea>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(SurfaceReinforcement1 != null ? SurfaceReinforcement1.ToStepValue() : "$");
			parameters.Add(SurfaceReinforcement2 != null ? SurfaceReinforcement2.ToStepValue() : "$");
			parameters.Add(ShearReinforcement != null ? ShearReinforcement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
