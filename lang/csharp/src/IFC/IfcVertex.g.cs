

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertex.htm"/>
	/// </summary>
	public  partial class IfcVertex : IfcTopologicalRepresentationItem
	{


		/// <summary>
		/// Construct a IfcVertex with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcVertex():base()
		{


		}
		public static new IfcVertex FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVertex>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();

            return string.Join(", ", parameters.ToArray());
        }
	}
}
