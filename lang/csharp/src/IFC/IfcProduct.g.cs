

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproduct.htm"/>
	/// </summary>
	public abstract partial class IfcProduct : IfcObject
	{
		public IfcObjectPlacement ObjectPlacement{get;set;} // optional
		public IfcProductRepresentation Representation{get;set;} // optional
		public List<IfcRelAssignsToProduct> ReferencedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcProduct with all required attributes.
		/// </summary>
		public IfcProduct(IfcGloballyUniqueId globalId):base(globalId)
		{
			ReferencedBy = new List<IfcRelAssignsToProduct>();


		}
		/// <summary>
		/// Construct a IfcProduct with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProduct(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation):base(globalId,ownerHistory,name,description,objectType)
		{
			ReferencedBy = new List<IfcRelAssignsToProduct>();

			ObjectPlacement = objectPlacement;
			Representation = representation;

		}
		public static new IfcProduct FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProduct>(json); }

	}
}
