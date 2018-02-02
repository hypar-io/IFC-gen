

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowstoragedevicetype.htm"/>
	/// </summary>
	public abstract partial class IfcFlowStorageDeviceType : IfcDistributionFlowElementType
	{


		/// <summary>
		/// Construct a IfcFlowStorageDeviceType with all required attributes.
		/// </summary>
		public IfcFlowStorageDeviceType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFlowStorageDeviceType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFlowStorageDeviceType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{


		}
		public static new IfcFlowStorageDeviceType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFlowStorageDeviceType>(json); }

	}
}
