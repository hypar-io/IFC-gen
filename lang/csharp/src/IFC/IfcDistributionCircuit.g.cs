

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncircuit.htm"/>
	/// </summary>
	public  partial class IfcDistributionCircuit : IfcDistributionSystem
	{


		/// <summary>
		/// Construct a IfcDistributionCircuit with all required attributes.
		/// </summary>
		public IfcDistributionCircuit(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDistributionCircuit with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDistributionCircuit(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLabel longName,IfcDistributionSystemEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,longName,predefinedType)
		{


		}
		public static new IfcDistributionCircuit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDistributionCircuit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
