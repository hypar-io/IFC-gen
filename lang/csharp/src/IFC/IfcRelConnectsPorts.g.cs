

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsports.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsPorts : IfcRelConnects
	{
		public IfcPort RelatingPort{get;set;} 
		public IfcPort RelatedPort{get;set;} 
		public IfcElement RealizingElement{get;set;} // optional


		/// <summary>
		/// Construct a IfcRelConnectsPorts with all required attributes.
		/// </summary>
		public IfcRelConnectsPorts(IfcGloballyUniqueId globalId,IfcPort relatingPort,IfcPort relatedPort):base(globalId)
		{

			RelatingPort = relatingPort;
			RelatedPort = relatedPort;

		}
		/// <summary>
		/// Construct a IfcRelConnectsPorts with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsPorts(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcPort relatingPort,IfcPort relatedPort,IfcElement realizingElement):base(globalId,ownerHistory,name,description)
		{

			RelatingPort = relatingPort;
			RelatedPort = relatedPort;
			RealizingElement = realizingElement;

		}
		public static new IfcRelConnectsPorts FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsPorts>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingPort != null ? RelatingPort.ToStepValue() : "$");
			parameters.Add(RelatedPort != null ? RelatedPort.ToStepValue() : "$");
			parameters.Add(RealizingElement != null ? RealizingElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
