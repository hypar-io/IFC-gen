

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcolour.htm"/>
	/// </summary>
	public  partial class IfcDraughtingPreDefinedColour : IfcPreDefinedColour
	{


		/// <summary>
		/// Construct a IfcDraughtingPreDefinedColour with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDraughtingPreDefinedColour(IfcLabel name):base(name)
		{


		}
		public static new IfcDraughtingPreDefinedColour FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDraughtingPreDefinedColour>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
