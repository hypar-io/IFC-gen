

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurrencyrelationship.htm"/>
	/// </summary>
	public  partial class IfcCurrencyRelationship : IfcResourceLevelRelationship
	{
		public IfcMonetaryUnit RelatingMonetaryUnit{get;set;} 
		public IfcMonetaryUnit RelatedMonetaryUnit{get;set;} 
		public IfcPositiveRatioMeasure ExchangeRate{get;set;} 
		public IfcDateTime RateDateTime{get;set;} // optional
		public IfcLibraryInformation RateSource{get;set;} // optional


		/// <summary>
		/// Construct a IfcCurrencyRelationship with all required attributes.
		/// </summary>
		public IfcCurrencyRelationship(IfcMonetaryUnit relatingMonetaryUnit,IfcMonetaryUnit relatedMonetaryUnit,IfcPositiveRatioMeasure exchangeRate):base()
		{

			RelatingMonetaryUnit = relatingMonetaryUnit;
			RelatedMonetaryUnit = relatedMonetaryUnit;
			ExchangeRate = exchangeRate;

		}
		/// <summary>
		/// Construct a IfcCurrencyRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurrencyRelationship(IfcLabel name,IfcText description,IfcMonetaryUnit relatingMonetaryUnit,IfcMonetaryUnit relatedMonetaryUnit,IfcPositiveRatioMeasure exchangeRate,IfcDateTime rateDateTime,IfcLibraryInformation rateSource):base(name,description)
		{

			RelatingMonetaryUnit = relatingMonetaryUnit;
			RelatedMonetaryUnit = relatedMonetaryUnit;
			ExchangeRate = exchangeRate;
			RateDateTime = rateDateTime;
			RateSource = rateSource;

		}
		public static new IfcCurrencyRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurrencyRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingMonetaryUnit != null ? RelatingMonetaryUnit.ToStepValue() : "$");
			parameters.Add(RelatedMonetaryUnit != null ? RelatedMonetaryUnit.ToStepValue() : "$");
			parameters.Add(ExchangeRate != null ? ExchangeRate.ToStepValue() : "$");
			parameters.Add(RateDateTime != null ? RateDateTime.ToStepValue() : "$");
			parameters.Add(RateSource != null ? RateSource.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
