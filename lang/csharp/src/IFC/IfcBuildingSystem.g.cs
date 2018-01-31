

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingsystem.htm"/>
	/// </summary>
	public  partial class IfcBuildingSystem : IfcSystem
	{
		public IfcBuildingSystemTypeEnum PredefinedType{get;set;} // optional
		public IfcLabel LongName{get;set;} // optional


		/// <summary>
		/// Construct a IfcBuildingSystem with all required attributes.
		/// </summary>
		public IfcBuildingSystem(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcBuildingSystem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBuildingSystem(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcBuildingSystemTypeEnum predefinedType,IfcLabel longName):base(globalId,ownerHistory,name,description,objectType)
		{

			PredefinedType = predefinedType;
			LongName = longName;

		}
		public static new IfcBuildingSystem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBuildingSystem>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
