

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralitem.htm"/>
	/// </summary>
	public abstract partial class IfcStructuralItem : IfcProduct
	{
		public List<IfcRelConnectsStructuralActivity> AssignedStructuralActivity{get;set;} // inverse


		/// <summary>
		/// Construct a IfcStructuralItem with all required attributes.
		/// </summary>
		public IfcStructuralItem(IfcGloballyUniqueId globalId):base(globalId)
		{
			AssignedStructuralActivity = new List<IfcRelConnectsStructuralActivity>();


		}
		/// <summary>
		/// Construct a IfcStructuralItem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralItem(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			AssignedStructuralActivity = new List<IfcRelConnectsStructuralActivity>();


		}
		public static new IfcStructuralItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralItem>(json); }

	}
}
