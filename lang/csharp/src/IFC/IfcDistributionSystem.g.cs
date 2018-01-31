

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionsystem.htm"/>
	/// </summary>
	public  partial class IfcDistributionSystem : IfcSystem
	{
		public IfcLabel LongName{get;set;} // optional
		public IfcDistributionSystemEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcDistributionSystem with all required attributes.
		/// </summary>
		public IfcDistributionSystem(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDistributionSystem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDistributionSystem(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLabel longName,IfcDistributionSystemEnum predefinedType):base(globalId,ownerHistory,name,description,objectType)
		{

			LongName = longName;
			PredefinedType = predefinedType;

		}
		public static new IfcDistributionSystem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDistributionSystem>(json); }

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
