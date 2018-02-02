

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyproperties.htm"/>
	/// </summary>
	public  partial class IfcRelDefinesByProperties : IfcRelDefines
	{
		public List<IfcObjectDefinition> RelatedObjects{get;set;} 
		public IfcPropertySetDefinitionSelect RelatingPropertyDefinition{get;set;} 


		/// <summary>
		/// Construct a IfcRelDefinesByProperties with all required attributes.
		/// </summary>
		public IfcRelDefinesByProperties(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcPropertySetDefinitionSelect relatingPropertyDefinition):base(globalId)
		{

			RelatedObjects = relatedObjects;
			RelatingPropertyDefinition = relatingPropertyDefinition;

		}
		/// <summary>
		/// Construct a IfcRelDefinesByProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDefinesByProperties(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcPropertySetDefinitionSelect relatingPropertyDefinition):base(globalId,ownerHistory,name,description)
		{

			RelatedObjects = relatedObjects;
			RelatingPropertyDefinition = relatingPropertyDefinition;

		}
		public static new IfcRelDefinesByProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDefinesByProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingPropertyDefinition != null ? RelatingPropertyDefinition.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
