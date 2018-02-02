

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontrol.htm"/>
	/// </summary>
	public abstract partial class IfcControl : IfcObject
	{
		public IfcIdentifier Identification{get;set;} // optional
		public List<IfcRelAssignsToControl> Controls{get;set;} // inverse


		/// <summary>
		/// Construct a IfcControl with all required attributes.
		/// </summary>
		public IfcControl(IfcGloballyUniqueId globalId):base(globalId)
		{
			Controls = new List<IfcRelAssignsToControl>();


		}
		/// <summary>
		/// Construct a IfcControl with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcControl(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification):base(globalId,ownerHistory,name,description,objectType)
		{
			Controls = new List<IfcRelAssignsToControl>();

			Identification = identification;

		}
		public static new IfcControl FromJSON(string json){ return JsonConvert.DeserializeObject<IfcControl>(json); }

	}
}
