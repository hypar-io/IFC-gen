

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforcewarping.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadSingleForceWarping : IfcStructuralLoadSingleForce
	{
		public IfcWarpingMomentMeasure WarpingMoment{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadSingleForceWarping with all required attributes.
		/// </summary>
		public IfcStructuralLoadSingleForceWarping():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadSingleForceWarping with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadSingleForceWarping(IfcLabel name,IfcForceMeasure forceX,IfcForceMeasure forceY,IfcForceMeasure forceZ,IfcTorqueMeasure momentX,IfcTorqueMeasure momentY,IfcTorqueMeasure momentZ,IfcWarpingMomentMeasure warpingMoment):base(name,forceX,forceY,forceZ,momentX,momentY,momentZ)
		{

			WarpingMoment = warpingMoment;

		}
		public static new IfcStructuralLoadSingleForceWarping FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadSingleForceWarping>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(ForceX != null ? ForceX.ToStepValue() : "$");
			parameters.Add(ForceY != null ? ForceY.ToStepValue() : "$");
			parameters.Add(ForceZ != null ? ForceZ.ToStepValue() : "$");
			parameters.Add(MomentX != null ? MomentX.ToStepValue() : "$");
			parameters.Add(MomentY != null ? MomentY.ToStepValue() : "$");
			parameters.Add(MomentZ != null ? MomentZ.ToStepValue() : "$");
			parameters.Add(WarpingMoment != null ? WarpingMoment.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
