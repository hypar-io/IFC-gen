

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationitem.htm"/>
	/// </summary>
	public abstract partial class IfcRepresentationItem : BaseIfc
	{
		public List<IfcPresentationLayerAssignment> LayerAssignment{get;set;} // inverse
		public List<IfcStyledItem> StyledByItem{get;set;} // inverse


		/// <summary>
		/// Construct a IfcRepresentationItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRepresentationItem():base()
		{
			LayerAssignment = new List<IfcPresentationLayerAssignment>();
			StyledByItem = new List<IfcStyledItem>();


		}
		public static  IfcRepresentationItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRepresentationItem>(json); }

	}
}
