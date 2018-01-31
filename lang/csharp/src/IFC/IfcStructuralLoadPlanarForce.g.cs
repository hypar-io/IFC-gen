

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadplanarforce.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadPlanarForce : IfcStructuralLoadStatic
	{
		public IfcPlanarForceMeasure PlanarForceX{get;set;} // optional
		public IfcPlanarForceMeasure PlanarForceY{get;set;} // optional
		public IfcPlanarForceMeasure PlanarForceZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadPlanarForce with all required attributes.
		/// </summary>
		public IfcStructuralLoadPlanarForce():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadPlanarForce with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadPlanarForce(IfcLabel name,IfcPlanarForceMeasure planarForceX,IfcPlanarForceMeasure planarForceY,IfcPlanarForceMeasure planarForceZ):base(name)
		{

			PlanarForceX = planarForceX;
			PlanarForceY = planarForceY;
			PlanarForceZ = planarForceZ;

		}
		public static new IfcStructuralLoadPlanarForce FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadPlanarForce>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(PlanarForceX != null ? PlanarForceX.ToStepValue() : "$");
			parameters.Add(PlanarForceY != null ? PlanarForceY.ToStepValue() : "$");
			parameters.Add(PlanarForceZ != null ? PlanarForceZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
