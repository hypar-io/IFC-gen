

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalspatialstructureelement.htm"/>
	/// </summary>
	public abstract partial class IfcExternalSpatialStructureElement : IfcSpatialElement
	{


		/// <summary>
		/// Construct a IfcExternalSpatialStructureElement with all required attributes.
		/// </summary>
		public IfcExternalSpatialStructureElement(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcExternalSpatialStructureElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternalSpatialStructureElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,longName)
		{


		}
		public static new IfcExternalSpatialStructureElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternalSpatialStructureElement>(json); }

	}
}
