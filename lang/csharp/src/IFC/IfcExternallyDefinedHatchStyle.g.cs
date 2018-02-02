

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedhatchstyle.htm"/>
	/// </summary>
	public  partial class IfcExternallyDefinedHatchStyle : IfcExternalReference
	{


		/// <summary>
		/// Construct a IfcExternallyDefinedHatchStyle with all required attributes.
		/// </summary>
		public IfcExternallyDefinedHatchStyle():base()
		{


		}
		/// <summary>
		/// Construct a IfcExternallyDefinedHatchStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternallyDefinedHatchStyle(IfcURIReference location,IfcIdentifier identification,IfcLabel name):base(location,identification,name)
		{


		}
		public static new IfcExternallyDefinedHatchStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternallyDefinedHatchStyle>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Location != null ? Location.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
