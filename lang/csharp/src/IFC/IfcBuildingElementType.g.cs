

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementtype.htm"/>
	/// </summary>
	public abstract partial class IfcBuildingElementType : IfcElementType
	{


		/// <summary>
		/// Construct a IfcBuildingElementType with all required attributes.
		/// </summary>
		public IfcBuildingElementType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcBuildingElementType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBuildingElementType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{


		}
		public static new IfcBuildingElementType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBuildingElementType>(json); }

	}
}
