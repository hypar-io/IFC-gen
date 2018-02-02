

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadSingleForce : IfcStructuralLoadStatic
	{
		public IfcForceMeasure ForceX{get;set;} // optional
		public IfcForceMeasure ForceY{get;set;} // optional
		public IfcForceMeasure ForceZ{get;set;} // optional
		public IfcTorqueMeasure MomentX{get;set;} // optional
		public IfcTorqueMeasure MomentY{get;set;} // optional
		public IfcTorqueMeasure MomentZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadSingleForce with all required attributes.
		/// </summary>
		public IfcStructuralLoadSingleForce():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadSingleForce with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadSingleForce(IfcLabel name,IfcForceMeasure forceX,IfcForceMeasure forceY,IfcForceMeasure forceZ,IfcTorqueMeasure momentX,IfcTorqueMeasure momentY,IfcTorqueMeasure momentZ):base(name)
		{

			ForceX = forceX;
			ForceY = forceY;
			ForceZ = forceZ;
			MomentX = momentX;
			MomentY = momentY;
			MomentZ = momentZ;

		}
		public static new IfcStructuralLoadSingleForce FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadSingleForce>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
