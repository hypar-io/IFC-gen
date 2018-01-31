

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydefinition.htm"/>
	/// </summary>
	public abstract partial class IfcPropertyDefinition : IfcRoot
	{
		public List<IfcRelDeclares> HasContext{get;set;} // inverse
		public List<IfcRelAssociates> HasAssociations{get;set;} // inverse


		/// <summary>
		/// Construct a IfcPropertyDefinition with all required attributes.
		/// </summary>
		public IfcPropertyDefinition(IfcGloballyUniqueId globalId):base(globalId)
		{
			HasContext = new List<IfcRelDeclares>();
			HasAssociations = new List<IfcRelAssociates>();


		}
		/// <summary>
		/// Construct a IfcPropertyDefinition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyDefinition(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base(globalId,ownerHistory,name,description)
		{
			HasContext = new List<IfcRelDeclares>();
			HasAssociations = new List<IfcRelAssociates>();


		}
		public static new IfcPropertyDefinition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyDefinition>(json); }

	}
}
