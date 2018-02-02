

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementdefinitionproperties.htm"/>
	/// </summary>
	public  partial class IfcReinforcementDefinitionProperties : IfcPreDefinedPropertySet
	{
		public IfcLabel DefinitionType{get;set;} // optional
		public List<IfcSectionReinforcementProperties> ReinforcementSectionDefinitions{get;set;} 


		/// <summary>
		/// Construct a IfcReinforcementDefinitionProperties with all required attributes.
		/// </summary>
		public IfcReinforcementDefinitionProperties(IfcGloballyUniqueId globalId,List<IfcSectionReinforcementProperties> reinforcementSectionDefinitions):base(globalId)
		{

			ReinforcementSectionDefinitions = reinforcementSectionDefinitions;

		}
		/// <summary>
		/// Construct a IfcReinforcementDefinitionProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReinforcementDefinitionProperties(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel definitionType,List<IfcSectionReinforcementProperties> reinforcementSectionDefinitions):base(globalId,ownerHistory,name,description)
		{

			DefinitionType = definitionType;
			ReinforcementSectionDefinitions = reinforcementSectionDefinitions;

		}
		public static new IfcReinforcementDefinitionProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReinforcementDefinitionProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(DefinitionType != null ? DefinitionType.ToStepValue() : "$");
			parameters.Add(ReinforcementSectionDefinitions != null ? ReinforcementSectionDefinitions.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
