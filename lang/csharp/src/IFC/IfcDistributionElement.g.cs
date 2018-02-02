

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionelement.htm"/>
	/// </summary>
	public  partial class IfcDistributionElement : IfcElement
	{
		public List<IfcRelConnectsPortToElement> HasPorts{get;set;} // inverse


		/// <summary>
		/// Construct a IfcDistributionElement with all required attributes.
		/// </summary>
		public IfcDistributionElement(IfcGloballyUniqueId globalId):base(globalId)
		{
			HasPorts = new List<IfcRelConnectsPortToElement>();


		}
		/// <summary>
		/// Construct a IfcDistributionElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDistributionElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{
			HasPorts = new List<IfcRelConnectsPortToElement>();


		}
		public static new IfcDistributionElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDistributionElement>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(ObjectPlacement != null ? ObjectPlacement.ToStepValue() : "$");
			parameters.Add(Representation != null ? Representation.ToStepValue() : "$");
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
