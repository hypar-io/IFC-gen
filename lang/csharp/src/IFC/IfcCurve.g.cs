

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurve.htm"/>
	/// </summary>
	public abstract partial class IfcCurve : IfcGeometricRepresentationItem
	{

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCurve():base()
		{


		}
		public static new IfcCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCurve>(json); }

	}
}
