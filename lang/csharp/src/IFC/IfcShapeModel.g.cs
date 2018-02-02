

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapemodel.htm"/>
	/// </summary>
	public abstract partial class IfcShapeModel : IfcRepresentation
	{
		public List<IfcShapeAspect> OfShapeAspect{get;set;} // inverse


		/// <summary>
		/// Construct a IfcShapeModel with all required attributes.
		/// </summary>
		public IfcShapeModel(IfcRepresentationContext contextOfItems,List<IfcRepresentationItem> items):base(contextOfItems,items)
		{
			OfShapeAspect = new List<IfcShapeAspect>();


		}
		/// <summary>
		/// Construct a IfcShapeModel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcShapeModel(IfcRepresentationContext contextOfItems,IfcLabel representationIdentifier,IfcLabel representationType,List<IfcRepresentationItem> items):base(contextOfItems,representationIdentifier,representationType,items)
		{
			OfShapeAspect = new List<IfcShapeAspect>();


		}
		public static new IfcShapeModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcShapeModel>(json); }

	}
}
