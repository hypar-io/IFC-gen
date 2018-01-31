

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcurvefont.htm"/>
	/// </summary>
	public  partial class IfcDraughtingPreDefinedCurveFont : IfcPreDefinedCurveFont
	{


		/// <summary>
		/// Construct a IfcDraughtingPreDefinedCurveFont with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDraughtingPreDefinedCurveFont(IfcLabel name):base(name)
		{


		}
		public static new IfcDraughtingPreDefinedCurveFont FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDraughtingPreDefinedCurveFont>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
