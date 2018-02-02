

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialstructureelement.htm"/>
	/// </summary>
	public abstract partial class IfcSpatialStructureElement : IfcSpatialElement
	{
		public IfcElementCompositionEnum CompositionType{get;set;} // optional


		/// <summary>
		/// Construct a IfcSpatialStructureElement with all required attributes.
		/// </summary>
		public IfcSpatialStructureElement(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcSpatialStructureElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSpatialStructureElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName,IfcElementCompositionEnum compositionType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName)
		{

			CompositionType = compositionType;

		}
		public static new IfcSpatialStructureElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpatialStructureElement>(json); }

	}
}
