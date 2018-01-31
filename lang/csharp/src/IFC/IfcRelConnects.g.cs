

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnects.htm"/>
	/// </summary>
	public abstract partial class IfcRelConnects : IfcRelationship
	{


		/// <summary>
		/// Construct a IfcRelConnects with all required attributes.
		/// </summary>
		public IfcRelConnects(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcRelConnects with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnects(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base(globalId,ownerHistory,name,description)
		{


		}
		public static new IfcRelConnects FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnects>(json); }

	}
}
