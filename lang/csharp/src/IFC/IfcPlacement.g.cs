

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplacement.htm"/>
	/// </summary>
	public abstract partial class IfcPlacement : IfcGeometricRepresentationItem
	{
		public IfcCartesianPoint Location{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcPlacement with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPlacement(IfcCartesianPoint location):base()
		{

			Location = location;

		}
		public static new IfcPlacement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPlacement>(json); }

	}
}
