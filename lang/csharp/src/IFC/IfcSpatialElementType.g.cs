

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialelementtype.htm"/>
	/// </summary>
	public abstract partial class IfcSpatialElementType : IfcTypeProduct
	{
		public IfcLabel ElementType{get;set;} // optional


		/// <summary>
		/// Construct a IfcSpatialElementType with all required attributes.
		/// </summary>
		public IfcSpatialElementType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcSpatialElementType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSpatialElementType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag)
		{

			ElementType = elementType;

		}
		public static new IfcSpatialElementType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpatialElementType>(json); }

	}
}
