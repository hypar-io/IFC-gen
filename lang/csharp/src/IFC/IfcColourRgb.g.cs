

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgb.htm"/>
	/// </summary>
	public  partial class IfcColourRgb : IfcColourSpecification
	{
		public IfcNormalisedRatioMeasure Red{get;set;} 
		public IfcNormalisedRatioMeasure Green{get;set;} 
		public IfcNormalisedRatioMeasure Blue{get;set;} 


		/// <summary>
		/// Construct a IfcColourRgb with all required attributes.
		/// </summary>
		public IfcColourRgb(IfcNormalisedRatioMeasure red,IfcNormalisedRatioMeasure green,IfcNormalisedRatioMeasure blue):base()
		{

			Red = red;
			Green = green;
			Blue = blue;

		}
		/// <summary>
		/// Construct a IfcColourRgb with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcColourRgb(IfcLabel name,IfcNormalisedRatioMeasure red,IfcNormalisedRatioMeasure green,IfcNormalisedRatioMeasure blue):base(name)
		{

			Red = red;
			Green = green;
			Blue = blue;

		}
		public static new IfcColourRgb FromJSON(string json){ return JsonConvert.DeserializeObject<IfcColourRgb>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Red != null ? Red.ToStepValue() : "$");
			parameters.Add(Green != null ? Green.ToStepValue() : "$");
			parameters.Add(Blue != null ? Blue.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
