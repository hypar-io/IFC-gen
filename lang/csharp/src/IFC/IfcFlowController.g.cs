

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowcontroller.htm"/>
	/// </summary>
	public  partial class IfcFlowController : IfcDistributionFlowElement
	{


		/// <summary>
		/// Construct a IfcFlowController with all required attributes.
		/// </summary>
		public IfcFlowController(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFlowController with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFlowController(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{


		}
		public static new IfcFlowController FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFlowController>(json); }

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
