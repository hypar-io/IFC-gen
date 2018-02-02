

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionport.htm"/>
	/// </summary>
	public  partial class IfcDistributionPort : IfcPort
	{
		public IfcFlowDirectionEnum FlowDirection{get;set;} // optional
		public IfcDistributionPortTypeEnum PredefinedType{get;set;} // optional
		public IfcDistributionSystemEnum SystemType{get;set;} // optional


		/// <summary>
		/// Construct a IfcDistributionPort with all required attributes.
		/// </summary>
		public IfcDistributionPort(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDistributionPort with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDistributionPort(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcFlowDirectionEnum flowDirection,IfcDistributionPortTypeEnum predefinedType,IfcDistributionSystemEnum systemType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{

			FlowDirection = flowDirection;
			PredefinedType = predefinedType;
			SystemType = systemType;

		}
		public static new IfcDistributionPort FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDistributionPort>(json); }

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
			parameters.Add(FlowDirection.ToStepValue());
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(SystemType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
