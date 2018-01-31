

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccolourrgblist.htm"/>
	/// </summary>
	public  partial class IfcColourRgbList : IfcPresentationItem
	{
		public List<List<IfcNormalisedRatioMeasure>> ColourList{get;set;} 


		/// <summary>
		/// Construct a IfcColourRgbList with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcColourRgbList(List<List<IfcNormalisedRatioMeasure>> colourList):base()
		{

			ColourList = colourList;

		}
		public static new IfcColourRgbList FromJSON(string json){ return JsonConvert.DeserializeObject<IfcColourRgbList>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ColourList != null ? ColourList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
