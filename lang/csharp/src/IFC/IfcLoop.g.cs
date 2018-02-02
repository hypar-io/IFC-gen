

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcloop.htm"/>
	/// </summary>
	public  partial class IfcLoop : IfcTopologicalRepresentationItem
	{


		/// <summary>
		/// Construct a IfcLoop with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcLoop():base()
		{


		}
		public static new IfcLoop FromJSON(string json){ return JsonConvert.DeserializeObject<IfcLoop>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();

            return string.Join(", ", parameters.ToArray());
        }
	}
}
