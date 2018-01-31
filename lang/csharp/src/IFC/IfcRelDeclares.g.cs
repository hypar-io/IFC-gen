

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldeclares.htm"/>
	/// </summary>
	public  partial class IfcRelDeclares : IfcRelationship
	{
		public IfcContext RelatingContext{get;set;} 
		public List<IfcDefinitionSelect> RelatedDefinitions{get;set;} 


		/// <summary>
		/// Construct a IfcRelDeclares with all required attributes.
		/// </summary>
		public IfcRelDeclares(IfcGloballyUniqueId globalId,IfcContext relatingContext,List<IfcDefinitionSelect> relatedDefinitions):base(globalId)
		{

			RelatingContext = relatingContext;
			RelatedDefinitions = relatedDefinitions;

		}
		/// <summary>
		/// Construct a IfcRelDeclares with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDeclares(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcContext relatingContext,List<IfcDefinitionSelect> relatedDefinitions):base(globalId,ownerHistory,name,description)
		{

			RelatingContext = relatingContext;
			RelatedDefinitions = relatedDefinitions;

		}
		public static new IfcRelDeclares FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDeclares>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingContext != null ? RelatingContext.ToStepValue() : "$");
			parameters.Add(RelatedDefinitions != null ? RelatedDefinitions.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
