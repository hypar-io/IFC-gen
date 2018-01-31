

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsystem.htm"/>
	/// </summary>
	public  partial class IfcSystem : IfcGroup
	{
		public List<IfcRelServicesBuildings> ServicesBuildings{get;set;} // inverse


		/// <summary>
		/// Construct a IfcSystem with all required attributes.
		/// </summary>
		public IfcSystem(IfcGloballyUniqueId globalId):base(globalId)
		{
			ServicesBuildings = new List<IfcRelServicesBuildings>();


		}
		/// <summary>
		/// Construct a IfcSystem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSystem(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType):base(globalId,ownerHistory,name,description,objectType)
		{
			ServicesBuildings = new List<IfcRelServicesBuildings>();


		}
		public static new IfcSystem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSystem>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
