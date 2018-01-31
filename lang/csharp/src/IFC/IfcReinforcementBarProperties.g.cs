

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementbarproperties.htm"/>
	/// </summary>
	public  partial class IfcReinforcementBarProperties : IfcPreDefinedProperties
	{
		public IfcAreaMeasure TotalCrossSectionArea{get;set;} 
		public IfcLabel SteelGrade{get;set;} 
		public IfcReinforcingBarSurfaceEnum BarSurface{get;set;} // optional
		public IfcLengthMeasure EffectiveDepth{get;set;} // optional
		public IfcPositiveLengthMeasure NominalBarDiameter{get;set;} // optional
		public IfcCountMeasure BarCount{get;set;} // optional


		/// <summary>
		/// Construct a IfcReinforcementBarProperties with all required attributes.
		/// </summary>
		public IfcReinforcementBarProperties(IfcAreaMeasure totalCrossSectionArea,IfcLabel steelGrade):base()
		{

			TotalCrossSectionArea = totalCrossSectionArea;
			SteelGrade = steelGrade;

		}
		/// <summary>
		/// Construct a IfcReinforcementBarProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReinforcementBarProperties(IfcAreaMeasure totalCrossSectionArea,IfcLabel steelGrade,IfcReinforcingBarSurfaceEnum barSurface,IfcLengthMeasure effectiveDepth,IfcPositiveLengthMeasure nominalBarDiameter,IfcCountMeasure barCount):base()
		{

			TotalCrossSectionArea = totalCrossSectionArea;
			SteelGrade = steelGrade;
			BarSurface = barSurface;
			EffectiveDepth = effectiveDepth;
			NominalBarDiameter = nominalBarDiameter;
			BarCount = barCount;

		}
		public static new IfcReinforcementBarProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReinforcementBarProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TotalCrossSectionArea != null ? TotalCrossSectionArea.ToStepValue() : "$");
			parameters.Add(SteelGrade != null ? SteelGrade.ToStepValue() : "$");
			parameters.Add(BarSurface.ToStepValue());
			parameters.Add(EffectiveDepth != null ? EffectiveDepth.ToStepValue() : "$");
			parameters.Add(NominalBarDiameter != null ? NominalBarDiameter.ToStepValue() : "$");
			parameters.Add(BarCount != null ? BarCount.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
