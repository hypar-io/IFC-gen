

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurface.htm"/>
	/// </summary>
	public abstract partial class IfcSurface : IfcGeometricRepresentationItem
	{

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurface():base()
		{


		}
		public static new IfcSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurface>(json); }

	}
}
