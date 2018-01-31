

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementtype.htm"/>
	/// </summary>
	public abstract partial class IfcElementType : IfcTypeProduct
	{
		public IfcLabel ElementType{get;set;} // optional


		/// <summary>
		/// Construct a IfcElementType with all required attributes.
		/// </summary>
		public IfcElementType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcElementType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElementType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag)
		{

			ElementType = elementType;

		}
		public static new IfcElementType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElementType>(json); }

	}
}
