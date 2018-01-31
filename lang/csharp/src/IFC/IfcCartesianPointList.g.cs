

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpointlist.htm"/>
	/// </summary>
	public abstract partial class IfcCartesianPointList : IfcGeometricRepresentationItem
	{

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianPointList with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianPointList():base()
		{


		}
		public static new IfcCartesianPointList FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianPointList>(json); }

	}
}
