

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobjectplacement.htm"/>
	/// </summary>
	public abstract partial class IfcObjectPlacement : BaseIfc
	{
		public List<IfcProduct> PlacesObject{get;set;} // inverse
		public List<IfcLocalPlacement> ReferencedByPlacements{get;set;} // inverse


		/// <summary>
		/// Construct a IfcObjectPlacement with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcObjectPlacement():base()
		{
			PlacesObject = new List<IfcProduct>();
			ReferencedByPlacements = new List<IfcLocalPlacement>();


		}
		public static  IfcObjectPlacement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcObjectPlacement>(json); }

	}
}
