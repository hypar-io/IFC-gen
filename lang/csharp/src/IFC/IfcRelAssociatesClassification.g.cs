

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesclassification.htm"/>
	/// </summary>
	public  partial class IfcRelAssociatesClassification : IfcRelAssociates
	{
		public IfcClassificationSelect RelatingClassification{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssociatesClassification with all required attributes.
		/// </summary>
		public IfcRelAssociatesClassification(IfcGloballyUniqueId globalId,List<IfcDefinitionSelect> relatedObjects,IfcClassificationSelect relatingClassification):base(globalId,relatedObjects)
		{

			RelatingClassification = relatingClassification;

		}
		/// <summary>
		/// Construct a IfcRelAssociatesClassification with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssociatesClassification(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDefinitionSelect> relatedObjects,IfcClassificationSelect relatingClassification):base(globalId,ownerHistory,name,description,relatedObjects)
		{

			RelatingClassification = relatingClassification;

		}
		public static new IfcRelAssociatesClassification FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssociatesClassification>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingClassification != null ? RelatingClassification.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
