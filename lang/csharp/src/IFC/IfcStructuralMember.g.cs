

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralmember.htm"/>
	/// </summary>
	public abstract partial class IfcStructuralMember : IfcStructuralItem
	{
		public List<IfcRelConnectsStructuralMember> ConnectedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcStructuralMember with all required attributes.
		/// </summary>
		public IfcStructuralMember(IfcGloballyUniqueId globalId):base(globalId)
		{
			ConnectedBy = new List<IfcRelConnectsStructuralMember>();


		}
		/// <summary>
		/// Construct a IfcStructuralMember with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralMember(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			ConnectedBy = new List<IfcRelConnectsStructuralMember>();


		}
		public static new IfcStructuralMember FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralMember>(json); }

	}
}
