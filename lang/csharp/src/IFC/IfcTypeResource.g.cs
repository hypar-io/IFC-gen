

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctyperesource.htm"/>
	/// </summary>
	public abstract partial class IfcTypeResource : IfcTypeObject
	{
		public IfcIdentifier Identification{get;set;} // optional
		public IfcText LongDescription{get;set;} // optional
		public IfcLabel ResourceType{get;set;} // optional
		public List<IfcRelAssignsToResource> ResourceOf{get;set;} // inverse


		/// <summary>
		/// Construct a IfcTypeResource with all required attributes.
		/// </summary>
		public IfcTypeResource(IfcGloballyUniqueId globalId):base(globalId)
		{
			ResourceOf = new List<IfcRelAssignsToResource>();


		}
		/// <summary>
		/// Construct a IfcTypeResource with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTypeResource(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel resourceType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets)
		{
			ResourceOf = new List<IfcRelAssignsToResource>();

			Identification = identification;
			LongDescription = longDescription;
			ResourceType = resourceType;

		}
		public static new IfcTypeResource FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTypeResource>(json); }

	}
}
