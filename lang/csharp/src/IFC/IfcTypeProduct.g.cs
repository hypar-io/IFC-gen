

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeproduct.htm"/>
	/// </summary>
	public  partial class IfcTypeProduct : IfcTypeObject
	{
		public List<IfcRepresentationMap> RepresentationMaps{get;set;} // optional
		public IfcLabel Tag{get;set;} // optional
		public List<IfcRelAssignsToProduct> ReferencedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcTypeProduct with all required attributes.
		/// </summary>
		public IfcTypeProduct(IfcGloballyUniqueId globalId):base(globalId)
		{
			RepresentationMaps = new List<IfcRepresentationMap>();
			ReferencedBy = new List<IfcRelAssignsToProduct>();


		}
		/// <summary>
		/// Construct a IfcTypeProduct with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTypeProduct(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets)
		{
			ReferencedBy = new List<IfcRelAssignsToProduct>();

			RepresentationMaps = representationMaps;
			Tag = tag;

		}
		public static new IfcTypeProduct FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTypeProduct>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ApplicableOccurrence != null ? ApplicableOccurrence.ToStepValue() : "$");
			parameters.Add(HasPropertySets != null ? HasPropertySets.ToStepValue() : "$");
			parameters.Add(RepresentationMaps != null ? RepresentationMaps.ToStepValue() : "$");
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
