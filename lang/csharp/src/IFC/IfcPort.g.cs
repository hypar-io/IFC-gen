

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcport.htm"/>
	/// </summary>
	public abstract partial class IfcPort : IfcProduct
	{
		public List<IfcRelConnectsPortToElement> ContainedIn{get;set;} // inverse
		public List<IfcRelConnectsPorts> ConnectedFrom{get;set;} // inverse
		public List<IfcRelConnectsPorts> ConnectedTo{get;set;} // inverse


		/// <summary>
		/// Construct a IfcPort with all required attributes.
		/// </summary>
		public IfcPort(IfcGloballyUniqueId globalId):base(globalId)
		{
			ContainedIn = new List<IfcRelConnectsPortToElement>();
			ConnectedFrom = new List<IfcRelConnectsPorts>();
			ConnectedTo = new List<IfcRelConnectsPorts>();


		}
		/// <summary>
		/// Construct a IfcPort with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPort(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			ContainedIn = new List<IfcRelConnectsPortToElement>();
			ConnectedFrom = new List<IfcRelConnectsPorts>();
			ConnectedTo = new List<IfcRelConnectsPorts>();


		}
		public static new IfcPort FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPort>(json); }

	}
}
