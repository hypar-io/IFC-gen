

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectselements.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsElements : IfcRelConnects
	{
		public IfcConnectionGeometry ConnectionGeometry{get;set;} // optional
		public IfcElement RelatingElement{get;set;} 
		public IfcElement RelatedElement{get;set;} 


		/// <summary>
		/// Construct a IfcRelConnectsElements with all required attributes.
		/// </summary>
		public IfcRelConnectsElements(IfcGloballyUniqueId globalId,IfcElement relatingElement,IfcElement relatedElement):base(globalId)
		{

			RelatingElement = relatingElement;
			RelatedElement = relatedElement;

		}
		/// <summary>
		/// Construct a IfcRelConnectsElements with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsElements(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcConnectionGeometry connectionGeometry,IfcElement relatingElement,IfcElement relatedElement):base(globalId,ownerHistory,name,description)
		{

			ConnectionGeometry = connectionGeometry;
			RelatingElement = relatingElement;
			RelatedElement = relatedElement;

		}
		public static new IfcRelConnectsElements FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsElements>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
