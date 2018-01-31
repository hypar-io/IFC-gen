

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelement.htm"/>
	/// </summary>
	public abstract partial class IfcFeatureElement : IfcElement
	{


		/// <summary>
		/// Construct a IfcFeatureElement with all required attributes.
		/// </summary>
		public IfcFeatureElement(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFeatureElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFeatureElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{


		}
		public static new IfcFeatureElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFeatureElement>(json); }

	}
}
