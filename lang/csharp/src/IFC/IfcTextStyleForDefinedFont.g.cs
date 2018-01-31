

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefordefinedfont.htm"/>
	/// </summary>
	public  partial class IfcTextStyleForDefinedFont : IfcPresentationItem
	{
		public IfcColour Colour{get;set;} 
		public IfcColour BackgroundColour{get;set;} // optional


		/// <summary>
		/// Construct a IfcTextStyleForDefinedFont with all required attributes.
		/// </summary>
		public IfcTextStyleForDefinedFont(IfcColour colour):base()
		{

			Colour = colour;

		}
		/// <summary>
		/// Construct a IfcTextStyleForDefinedFont with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextStyleForDefinedFont(IfcColour colour,IfcColour backgroundColour):base()
		{

			Colour = colour;
			BackgroundColour = backgroundColour;

		}
		public static new IfcTextStyleForDefinedFont FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextStyleForDefinedFont>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Colour != null ? Colour.ToStepValue() : "$");
			parameters.Add(BackgroundColour != null ? BackgroundColour.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
