

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadtemperature.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadTemperature : IfcStructuralLoadStatic
	{
		public IfcThermodynamicTemperatureMeasure DeltaTConstant{get;set;} // optional
		public IfcThermodynamicTemperatureMeasure DeltaTY{get;set;} // optional
		public IfcThermodynamicTemperatureMeasure DeltaTZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadTemperature with all required attributes.
		/// </summary>
		public IfcStructuralLoadTemperature():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadTemperature with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadTemperature(IfcLabel name,IfcThermodynamicTemperatureMeasure deltaTConstant,IfcThermodynamicTemperatureMeasure deltaTY,IfcThermodynamicTemperatureMeasure deltaTZ):base(name)
		{

			DeltaTConstant = deltaTConstant;
			DeltaTY = deltaTY;
			DeltaTZ = deltaTZ;

		}
		public static new IfcStructuralLoadTemperature FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadTemperature>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DeltaTConstant != null ? DeltaTConstant.ToStepValue() : "$");
			parameters.Add(DeltaTY != null ? DeltaTY.ToStepValue() : "$");
			parameters.Add(DeltaTZ != null ? DeltaTZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
