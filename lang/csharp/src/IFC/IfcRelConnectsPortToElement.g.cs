

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsporttoelement.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsPortToElement : IfcRelConnects
	{
		public IfcPort RelatingPort{get;set;} 
		public IfcDistributionElement RelatedElement{get;set;} 


		/// <summary>
		/// Construct a IfcRelConnectsPortToElement with all required attributes.
		/// </summary>
		public IfcRelConnectsPortToElement(IfcGloballyUniqueId globalId,IfcPort relatingPort,IfcDistributionElement relatedElement):base(globalId)
		{

			RelatingPort = relatingPort;
			RelatedElement = relatedElement;

		}
		/// <summary>
		/// Construct a IfcRelConnectsPortToElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsPortToElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcPort relatingPort,IfcDistributionElement relatedElement):base(globalId,ownerHistory,name,description)
		{

			RelatingPort = relatingPort;
			RelatedElement = relatedElement;

		}
		public static new IfcRelConnectsPortToElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsPortToElement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingPort != null ? RelatingPort.ToStepValue() : "$");
			parameters.Add(RelatedElement != null ? RelatedElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
