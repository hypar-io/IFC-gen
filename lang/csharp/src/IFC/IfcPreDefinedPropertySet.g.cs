

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedpropertyset.htm"/>
	/// </summary>
	public abstract partial class IfcPreDefinedPropertySet : IfcPropertySetDefinition
	{


		/// <summary>
		/// Construct a IfcPreDefinedPropertySet with all required attributes.
		/// </summary>
		public IfcPreDefinedPropertySet(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcPreDefinedPropertySet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPreDefinedPropertySet(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base(globalId,ownerHistory,name,description)
		{


		}
		public static new IfcPreDefinedPropertySet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPreDefinedPropertySet>(json); }

	}
}
