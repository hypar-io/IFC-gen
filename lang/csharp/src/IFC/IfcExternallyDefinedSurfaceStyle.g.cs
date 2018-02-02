

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternallydefinedsurfacestyle.htm"/>
	/// </summary>
	public  partial class IfcExternallyDefinedSurfaceStyle : IfcExternalReference
	{


		/// <summary>
		/// Construct a IfcExternallyDefinedSurfaceStyle with all required attributes.
		/// </summary>
		public IfcExternallyDefinedSurfaceStyle():base()
		{


		}
		/// <summary>
		/// Construct a IfcExternallyDefinedSurfaceStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternallyDefinedSurfaceStyle(IfcURIReference location,IfcIdentifier identification,IfcLabel name):base(location,identification,name)
		{


		}
		public static new IfcExternallyDefinedSurfaceStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternallyDefinedSurfaceStyle>(json); }

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
