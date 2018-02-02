

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedtextfont.htm"/>
	/// </summary>
	public  partial class IfcExternallyDefinedTextFont : IfcExternalReference
	{


		/// <summary>
		/// Construct a IfcExternallyDefinedTextFont with all required attributes.
		/// </summary>
		public IfcExternallyDefinedTextFont():base()
		{


		}
		/// <summary>
		/// Construct a IfcExternallyDefinedTextFont with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternallyDefinedTextFont(IfcURIReference location,IfcIdentifier identification,IfcLabel name):base(location,identification,name)
		{


		}
		public static new IfcExternallyDefinedTextFont FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternallyDefinedTextFont>(json); }

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
