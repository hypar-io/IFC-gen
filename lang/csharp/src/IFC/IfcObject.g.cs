

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcobject.htm"/>
	/// </summary>
	public abstract partial class IfcObject : IfcObjectDefinition
	{
		public IfcLabel ObjectType{get;set;} // optional
		public List<IfcRelDefinesByObject> IsDeclaredBy{get;set;} // inverse
		public List<IfcRelDefinesByObject> Declares{get;set;} // inverse
		public List<IfcRelDefinesByType> IsTypedBy{get;set;} // inverse
		public List<IfcRelDefinesByProperties> IsDefinedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcObject with all required attributes.
		/// </summary>
		public IfcObject(IfcGloballyUniqueId globalId):base(globalId)
		{
			IsDeclaredBy = new List<IfcRelDefinesByObject>();
			Declares = new List<IfcRelDefinesByObject>();
			IsTypedBy = new List<IfcRelDefinesByType>();
			IsDefinedBy = new List<IfcRelDefinesByProperties>();


		}
		/// <summary>
		/// Construct a IfcObject with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcObject(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType):base(globalId,ownerHistory,name,description)
		{
			IsDeclaredBy = new List<IfcRelDefinesByObject>();
			Declares = new List<IfcRelDefinesByObject>();
			IsTypedBy = new List<IfcRelDefinesByType>();
			IsDefinedBy = new List<IfcRelDefinesByProperties>();

			ObjectType = objectType;

		}
		public static new IfcObject FromJSON(string json){ return JsonConvert.DeserializeObject<IfcObject>(json); }

	}
}
