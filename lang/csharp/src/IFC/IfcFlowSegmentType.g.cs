

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowsegmenttype.htm"/>
	/// </summary>
	public abstract partial class IfcFlowSegmentType : IfcDistributionFlowElementType
	{


		/// <summary>
		/// Construct a IfcFlowSegmentType with all required attributes.
		/// </summary>
		public IfcFlowSegmentType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFlowSegmentType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFlowSegmentType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{


		}
		public static new IfcFlowSegmentType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFlowSegmentType>(json); }

	}
}
