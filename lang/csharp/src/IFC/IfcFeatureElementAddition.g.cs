

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelementaddition.htm"/>
	/// </summary>
	public abstract partial class IfcFeatureElementAddition : IfcFeatureElement
	{
		public IfcRelProjectsElement ProjectsElements{get;set;} // inverse


		/// <summary>
		/// Construct a IfcFeatureElementAddition with all required attributes.
		/// </summary>
		public IfcFeatureElementAddition(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFeatureElementAddition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFeatureElementAddition(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{


		}
		public static new IfcFeatureElementAddition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFeatureElementAddition>(json); }

	}
}
