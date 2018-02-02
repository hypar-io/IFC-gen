

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldecomposes.htm"/>
	/// </summary>
	public abstract partial class IfcRelDecomposes : IfcRelationship
	{


		/// <summary>
		/// Construct a IfcRelDecomposes with all required attributes.
		/// </summary>
		public IfcRelDecomposes(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcRelDecomposes with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDecomposes(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base(globalId,ownerHistory,name,description)
		{


		}
		public static new IfcRelDecomposes FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDecomposes>(json); }

	}
}
