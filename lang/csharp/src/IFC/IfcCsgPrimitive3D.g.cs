

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgprimitive3d.htm"/>
	/// </summary>
	public abstract partial class IfcCsgPrimitive3D : IfcGeometricRepresentationItem
	{
		public IfcAxis2Placement3D Position{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcCsgPrimitive3D with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCsgPrimitive3D(IfcAxis2Placement3D position):base()
		{

			Position = position;

		}
		public static new IfcCsgPrimitive3D FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCsgPrimitive3D>(json); }

	}
}
