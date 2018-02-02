

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswithrealizingelements.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsWithRealizingElements : IfcRelConnectsElements
	{
		public List<IfcElement> RealizingElements{get;set;} 
		public IfcLabel ConnectionType{get;set;} // optional


		/// <summary>
		/// Construct a IfcRelConnectsWithRealizingElements with all required attributes.
		/// </summary>
		public IfcRelConnectsWithRealizingElements(IfcGloballyUniqueId globalId,IfcElement relatingElement,IfcElement relatedElement,List<IfcElement> realizingElements):base(globalId,relatingElement,relatedElement)
		{

			RealizingElements = realizingElements;

		}
		/// <summary>
		/// Construct a IfcRelConnectsWithRealizingElements with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsWithRealizingElements(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcConnectionGeometry connectionGeometry,IfcElement relatingElement,IfcElement relatedElement,List<IfcElement> realizingElements,IfcLabel connectionType):base(globalId,ownerHistory,name,description,connectionGeometry,relatingElement,relatedElement)
		{

			RealizingElements = realizingElements;
			ConnectionType = connectionType;

		}
		public static new IfcRelConnectsWithRealizingElements FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsWithRealizingElements>(json); }

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
			parameters.Add(RealizingElements != null ? RealizingElements.ToStepValue() : "$");
			parameters.Add(ConnectionType != null ? ConnectionType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
