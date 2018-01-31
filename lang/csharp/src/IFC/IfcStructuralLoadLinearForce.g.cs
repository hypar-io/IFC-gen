

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadlinearforce.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadLinearForce : IfcStructuralLoadStatic
	{
		public IfcLinearForceMeasure LinearForceX{get;set;} // optional
		public IfcLinearForceMeasure LinearForceY{get;set;} // optional
		public IfcLinearForceMeasure LinearForceZ{get;set;} // optional
		public IfcLinearMomentMeasure LinearMomentX{get;set;} // optional
		public IfcLinearMomentMeasure LinearMomentY{get;set;} // optional
		public IfcLinearMomentMeasure LinearMomentZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadLinearForce with all required attributes.
		/// </summary>
		public IfcStructuralLoadLinearForce():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadLinearForce with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadLinearForce(IfcLabel name,IfcLinearForceMeasure linearForceX,IfcLinearForceMeasure linearForceY,IfcLinearForceMeasure linearForceZ,IfcLinearMomentMeasure linearMomentX,IfcLinearMomentMeasure linearMomentY,IfcLinearMomentMeasure linearMomentZ):base(name)
		{

			LinearForceX = linearForceX;
			LinearForceY = linearForceY;
			LinearForceZ = linearForceZ;
			LinearMomentX = linearMomentX;
			LinearMomentY = linearMomentY;
			LinearMomentZ = linearMomentZ;

		}
		public static new IfcStructuralLoadLinearForce FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadLinearForce>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(LinearForceX != null ? LinearForceX.ToStepValue() : "$");
			parameters.Add(LinearForceY != null ? LinearForceY.ToStepValue() : "$");
			parameters.Add(LinearForceZ != null ? LinearForceZ.ToStepValue() : "$");
			parameters.Add(LinearMomentX != null ? LinearMomentX.ToStepValue() : "$");
			parameters.Add(LinearMomentY != null ? LinearMomentY.ToStepValue() : "$");
			parameters.Add(LinearMomentZ != null ? LinearMomentZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
