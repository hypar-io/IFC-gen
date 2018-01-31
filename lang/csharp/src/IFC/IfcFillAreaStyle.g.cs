

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastyle.htm"/>
	/// </summary>
	public  partial class IfcFillAreaStyle : IfcPresentationStyle
	{
		public List<IfcFillStyleSelect> FillStyles{get;set;} 
		public IfcBoolean ModelorDraughting{get;set;} // optional


		/// <summary>
		/// Construct a IfcFillAreaStyle with all required attributes.
		/// </summary>
		public IfcFillAreaStyle(List<IfcFillStyleSelect> fillStyles):base()
		{

			FillStyles = fillStyles;

		}
		/// <summary>
		/// Construct a IfcFillAreaStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFillAreaStyle(IfcLabel name,List<IfcFillStyleSelect> fillStyles,IfcBoolean modelorDraughting):base(name)
		{

			FillStyles = fillStyles;
			ModelorDraughting = modelorDraughting;

		}
		public static new IfcFillAreaStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFillAreaStyle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(FillStyles != null ? FillStyles.ToStepValue() : "$");
			parameters.Add(ModelorDraughting != null ? ModelorDraughting.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
