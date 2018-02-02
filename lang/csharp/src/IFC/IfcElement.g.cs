

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelement.htm"/>
	/// </summary>
	public abstract partial class IfcElement : IfcProduct
	{
		public IfcIdentifier Tag{get;set;} // optional
		public List<IfcRelFillsElement> FillsVoids{get;set;} // inverse
		public List<IfcRelConnectsElements> ConnectedTo{get;set;} // inverse
		public List<IfcRelInterferesElements> IsInterferedByElements{get;set;} // inverse
		public List<IfcRelInterferesElements> InterferesElements{get;set;} // inverse
		public List<IfcRelProjectsElement> HasProjections{get;set;} // inverse
		public List<IfcRelReferencedInSpatialStructure> ReferencedInStructures{get;set;} // inverse
		public List<IfcRelVoidsElement> HasOpenings{get;set;} // inverse
		public List<IfcRelConnectsWithRealizingElements> IsConnectionRealization{get;set;} // inverse
		public List<IfcRelSpaceBoundary> ProvidesBoundaries{get;set;} // inverse
		public List<IfcRelConnectsElements> ConnectedFrom{get;set;} // inverse
		public List<IfcRelContainedInSpatialStructure> ContainedInStructure{get;set;} // inverse
		public List<IfcRelCoversBldgElements> HasCoverings{get;set;} // inverse


		/// <summary>
		/// Construct a IfcElement with all required attributes.
		/// </summary>
		public IfcElement(IfcGloballyUniqueId globalId):base(globalId)
		{
			FillsVoids = new List<IfcRelFillsElement>();
			ConnectedTo = new List<IfcRelConnectsElements>();
			IsInterferedByElements = new List<IfcRelInterferesElements>();
			InterferesElements = new List<IfcRelInterferesElements>();
			HasProjections = new List<IfcRelProjectsElement>();
			ReferencedInStructures = new List<IfcRelReferencedInSpatialStructure>();
			HasOpenings = new List<IfcRelVoidsElement>();
			IsConnectionRealization = new List<IfcRelConnectsWithRealizingElements>();
			ProvidesBoundaries = new List<IfcRelSpaceBoundary>();
			ConnectedFrom = new List<IfcRelConnectsElements>();
			ContainedInStructure = new List<IfcRelContainedInSpatialStructure>();
			HasCoverings = new List<IfcRelCoversBldgElements>();


		}
		/// <summary>
		/// Construct a IfcElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			FillsVoids = new List<IfcRelFillsElement>();
			ConnectedTo = new List<IfcRelConnectsElements>();
			IsInterferedByElements = new List<IfcRelInterferesElements>();
			InterferesElements = new List<IfcRelInterferesElements>();
			HasProjections = new List<IfcRelProjectsElement>();
			ReferencedInStructures = new List<IfcRelReferencedInSpatialStructure>();
			HasOpenings = new List<IfcRelVoidsElement>();
			IsConnectionRealization = new List<IfcRelConnectsWithRealizingElements>();
			ProvidesBoundaries = new List<IfcRelSpaceBoundary>();
			ConnectedFrom = new List<IfcRelConnectsElements>();
			ContainedInStructure = new List<IfcRelContainedInSpatialStructure>();
			HasCoverings = new List<IfcRelCoversBldgElements>();

			Tag = tag;

		}
		public static new IfcElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElement>(json); }

	}
}
