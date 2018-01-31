

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelservicesbuildings.htm"/>
	/// </summary>
	public  partial class IfcRelServicesBuildings : IfcRelConnects
	{
		public IfcSystem RelatingSystem{get;set;} 
		public List<IfcSpatialElement> RelatedBuildings{get;set;} 


		/// <summary>
		/// Construct a IfcRelServicesBuildings with all required attributes.
		/// </summary>
		public IfcRelServicesBuildings(IfcGloballyUniqueId globalId,IfcSystem relatingSystem,List<IfcSpatialElement> relatedBuildings):base(globalId)
		{

			RelatingSystem = relatingSystem;
			RelatedBuildings = relatedBuildings;

		}
		/// <summary>
		/// Construct a IfcRelServicesBuildings with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelServicesBuildings(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcSystem relatingSystem,List<IfcSpatialElement> relatedBuildings):base(globalId,ownerHistory,name,description)
		{

			RelatingSystem = relatingSystem;
			RelatedBuildings = relatedBuildings;

		}
		public static new IfcRelServicesBuildings FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelServicesBuildings>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingSystem != null ? RelatingSystem.ToStepValue() : "$");
			parameters.Add(RelatedBuildings != null ? RelatedBuildings.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
