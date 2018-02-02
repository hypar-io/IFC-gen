

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionvolumegeometry.htm"/>
	/// </summary>
	public  partial class IfcConnectionVolumeGeometry : IfcConnectionGeometry
	{
		public IfcSolidOrShell VolumeOnRelatingElement{get;set;} 
		public IfcSolidOrShell VolumeOnRelatedElement{get;set;} // optional


		/// <summary>
		/// Construct a IfcConnectionVolumeGeometry with all required attributes.
		/// </summary>
		public IfcConnectionVolumeGeometry(IfcSolidOrShell volumeOnRelatingElement):base()
		{

			VolumeOnRelatingElement = volumeOnRelatingElement;

		}
		/// <summary>
		/// Construct a IfcConnectionVolumeGeometry with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectionVolumeGeometry(IfcSolidOrShell volumeOnRelatingElement,IfcSolidOrShell volumeOnRelatedElement):base()
		{

			VolumeOnRelatingElement = volumeOnRelatingElement;
			VolumeOnRelatedElement = volumeOnRelatedElement;

		}
		public static new IfcConnectionVolumeGeometry FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectionVolumeGeometry>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(VolumeOnRelatingElement != null ? VolumeOnRelatingElement.ToStepValue() : "$");
			parameters.Add(VolumeOnRelatedElement != null ? VolumeOnRelatedElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
