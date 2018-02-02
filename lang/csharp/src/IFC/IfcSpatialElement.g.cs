

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspatialelement.htm"/>
	/// </summary>
	public abstract partial class IfcSpatialElement : IfcProduct
	{
		public IfcLabel LongName{get;set;} // optional
		public List<IfcRelContainedInSpatialStructure> ContainsElements{get;set;} // inverse
		public List<IfcRelServicesBuildings> ServicedBySystems{get;set;} // inverse
		public List<IfcRelReferencedInSpatialStructure> ReferencesElements{get;set;} // inverse


		/// <summary>
		/// Construct a IfcSpatialElement with all required attributes.
		/// </summary>
		public IfcSpatialElement(IfcGloballyUniqueId globalId):base(globalId)
		{
			ContainsElements = new List<IfcRelContainedInSpatialStructure>();
			ServicedBySystems = new List<IfcRelServicesBuildings>();
			ReferencesElements = new List<IfcRelReferencedInSpatialStructure>();


		}
		/// <summary>
		/// Construct a IfcSpatialElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSpatialElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcLabel longName):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			ContainsElements = new List<IfcRelContainedInSpatialStructure>();
			ServicedBySystems = new List<IfcRelServicesBuildings>();
			ReferencesElements = new List<IfcRelReferencedInSpatialStructure>();

			LongName = longName;

		}
		public static new IfcSpatialElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSpatialElement>(json); }

	}
}
