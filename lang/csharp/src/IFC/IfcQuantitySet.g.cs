

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityset.htm"/>
	/// </summary>
	public abstract partial class IfcQuantitySet : IfcPropertySetDefinition
	{


		/// <summary>
		/// Construct a IfcQuantitySet with all required attributes.
		/// </summary>
		public IfcQuantitySet(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcQuantitySet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantitySet(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base(globalId,ownerHistory,name,description)
		{


		}
		public static new IfcQuantitySet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantitySet>(json); }

	}
}
