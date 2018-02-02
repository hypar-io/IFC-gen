

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefines.htm"/>
	/// </summary>
	public abstract partial class IfcRelDefines : IfcRelationship
	{


		/// <summary>
		/// Construct a IfcRelDefines with all required attributes.
		/// </summary>
		public IfcRelDefines(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcRelDefines with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDefines(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base(globalId,ownerHistory,name,description)
		{


		}
		public static new IfcRelDefines FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDefines>(json); }

	}
}
