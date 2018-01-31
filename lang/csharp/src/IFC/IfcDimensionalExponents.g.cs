

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensionalexponents.htm"/>
	/// </summary>
	public  partial class IfcDimensionalExponents : BaseIfc
	{
		public int LengthExponent{get;set;} 
		public int MassExponent{get;set;} 
		public int TimeExponent{get;set;} 
		public int ElectricCurrentExponent{get;set;} 
		public int ThermodynamicTemperatureExponent{get;set;} 
		public int AmountOfSubstanceExponent{get;set;} 
		public int LuminousIntensityExponent{get;set;} 


		/// <summary>
		/// Construct a IfcDimensionalExponents with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDimensionalExponents(int lengthExponent,int massExponent,int timeExponent,int electricCurrentExponent,int thermodynamicTemperatureExponent,int amountOfSubstanceExponent,int luminousIntensityExponent):base()
		{

			LengthExponent = lengthExponent;
			MassExponent = massExponent;
			TimeExponent = timeExponent;
			ElectricCurrentExponent = electricCurrentExponent;
			ThermodynamicTemperatureExponent = thermodynamicTemperatureExponent;
			AmountOfSubstanceExponent = amountOfSubstanceExponent;
			LuminousIntensityExponent = luminousIntensityExponent;

		}
		public static  IfcDimensionalExponents FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDimensionalExponents>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(LengthExponent.ToStepValue());
			parameters.Add(MassExponent.ToStepValue());
			parameters.Add(TimeExponent.ToStepValue());
			parameters.Add(ElectricCurrentExponent.ToStepValue());
			parameters.Add(ThermodynamicTemperatureExponent.ToStepValue());
			parameters.Add(AmountOfSubstanceExponent.ToStepValue());
			parameters.Add(LuminousIntensityExponent.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
