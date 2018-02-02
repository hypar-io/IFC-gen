

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectspathelements.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsPathElements : IfcRelConnectsElements
	{
		public List<IfcInteger> RelatingPriorities{get;set;} 
		public List<IfcInteger> RelatedPriorities{get;set;} 
		public IfcConnectionTypeEnum RelatedConnectionType{get;set;} 
		public IfcConnectionTypeEnum RelatingConnectionType{get;set;} 


		/// <summary>
		/// Construct a IfcRelConnectsPathElements with all required attributes.
		/// </summary>
		public IfcRelConnectsPathElements(IfcGloballyUniqueId globalId,IfcElement relatingElement,IfcElement relatedElement,List<IfcInteger> relatingPriorities,List<IfcInteger> relatedPriorities,IfcConnectionTypeEnum relatedConnectionType,IfcConnectionTypeEnum relatingConnectionType):base(globalId,relatingElement,relatedElement)
		{

			RelatingPriorities = relatingPriorities;
			RelatedPriorities = relatedPriorities;
			RelatedConnectionType = relatedConnectionType;
			RelatingConnectionType = relatingConnectionType;

		}
		/// <summary>
		/// Construct a IfcRelConnectsPathElements with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsPathElements(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcConnectionGeometry connectionGeometry,IfcElement relatingElement,IfcElement relatedElement,List<IfcInteger> relatingPriorities,List<IfcInteger> relatedPriorities,IfcConnectionTypeEnum relatedConnectionType,IfcConnectionTypeEnum relatingConnectionType):base(globalId,ownerHistory,name,description,connectionGeometry,relatingElement,relatedElement)
		{

			RelatingPriorities = relatingPriorities;
			RelatedPriorities = relatedPriorities;
			RelatedConnectionType = relatedConnectionType;
			RelatingConnectionType = relatingConnectionType;

		}
		public static new IfcRelConnectsPathElements FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsPathElements>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ConnectionGeometry != null ? ConnectionGeometry.ToStepValue() : "$");
			parameters.Add(RelatingElement != null ? RelatingElement.ToStepValue() : "$");
			parameters.Add(RelatedElement != null ? RelatedElement.ToStepValue() : "$");
			parameters.Add(RelatingPriorities != null ? RelatingPriorities.ToStepValue() : "$");
			parameters.Add(RelatedPriorities != null ? RelatedPriorities.ToStepValue() : "$");
			parameters.Add(RelatedConnectionType.ToStepValue());
			parameters.Add(RelatingConnectionType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
