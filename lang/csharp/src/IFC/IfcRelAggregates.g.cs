

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelaggregates.htm"/>
	/// </summary>
	public  partial class IfcRelAggregates : IfcRelDecomposes
	{
		public IfcObjectDefinition RelatingObject{get;set;} 
		public List<IfcObjectDefinition> RelatedObjects{get;set;} 


		/// <summary>
		/// Construct a IfcRelAggregates with all required attributes.
		/// </summary>
		public IfcRelAggregates(IfcGloballyUniqueId globalId,IfcObjectDefinition relatingObject,List<IfcObjectDefinition> relatedObjects):base(globalId)
		{

			RelatingObject = relatingObject;
			RelatedObjects = relatedObjects;

		}
		/// <summary>
		/// Construct a IfcRelAggregates with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAggregates(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcObjectDefinition relatingObject,List<IfcObjectDefinition> relatedObjects):base(globalId,ownerHistory,name,description)
		{

			RelatingObject = relatingObject;
			RelatedObjects = relatedObjects;

		}
		public static new IfcRelAggregates FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAggregates>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingObject != null ? RelatingObject.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
