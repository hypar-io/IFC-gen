

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowfittingtype.htm"/>
	/// </summary>
	public abstract partial class IfcFlowFittingType : IfcDistributionFlowElementType
	{


		/// <summary>
		/// Construct a IfcFlowFittingType with all required attributes.
		/// </summary>
		public IfcFlowFittingType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFlowFittingType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFlowFittingType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{


		}
		public static new IfcFlowFittingType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFlowFittingType>(json); }

	}
}
