

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponenttype.htm"/>
	/// </summary>
	public abstract partial class IfcElementComponentType : IfcElementType
	{


		/// <summary>
		/// Construct a IfcElementComponentType with all required attributes.
		/// </summary>
		public IfcElementComponentType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcElementComponentType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElementComponentType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{


		}
		public static new IfcElementComponentType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElementComponentType>(json); }

	}
}
