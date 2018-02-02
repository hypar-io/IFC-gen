

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedcolourmap.htm"/>
	/// </summary>
	public  partial class IfcIndexedColourMap : IfcPresentationItem
	{
		public IfcTessellatedFaceSet MappedTo{get;set;} 
		public IfcNormalisedRatioMeasure Opacity{get;set;} // optional
		public IfcColourRgbList Colours{get;set;} 
		public List<IfcPositiveInteger> ColourIndex{get;set;} 


		/// <summary>
		/// Construct a IfcIndexedColourMap with all required attributes.
		/// </summary>
		public IfcIndexedColourMap(IfcTessellatedFaceSet mappedTo,IfcColourRgbList colours,List<IfcPositiveInteger> colourIndex):base()
		{

			MappedTo = mappedTo;
			Colours = colours;
			ColourIndex = colourIndex;

		}
		/// <summary>
		/// Construct a IfcIndexedColourMap with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIndexedColourMap(IfcTessellatedFaceSet mappedTo,IfcNormalisedRatioMeasure opacity,IfcColourRgbList colours,List<IfcPositiveInteger> colourIndex):base()
		{

			MappedTo = mappedTo;
			Opacity = opacity;
			Colours = colours;
			ColourIndex = colourIndex;

		}
		public static new IfcIndexedColourMap FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIndexedColourMap>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(MappedTo != null ? MappedTo.ToStepValue() : "$");
			parameters.Add(Opacity != null ? Opacity.ToStepValue() : "$");
			parameters.Add(Colours != null ? Colours.ToStepValue() : "$");
			parameters.Add(ColourIndex != null ? ColourIndex.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
