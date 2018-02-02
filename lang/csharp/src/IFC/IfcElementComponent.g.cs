

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementcomponent.htm"/>
	/// </summary>
	public abstract partial class IfcElementComponent : IfcElement
	{


		/// <summary>
		/// Construct a IfcElementComponent with all required attributes.
		/// </summary>
		public IfcElementComponent(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcElementComponent with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElementComponent(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{


		}
		public static new IfcElementComponent FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElementComponent>(json); }

	}
}
