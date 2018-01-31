

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelementtype.htm"/>
	/// </summary>
	public abstract partial class IfcDistributionControlElementType : IfcDistributionElementType
	{


		/// <summary>
		/// Construct a IfcDistributionControlElementType with all required attributes.
		/// </summary>
		public IfcDistributionControlElementType(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDistributionControlElementType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDistributionControlElementType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{


		}
		public static new IfcDistributionControlElementType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDistributionControlElementType>(json); }

	}
}
