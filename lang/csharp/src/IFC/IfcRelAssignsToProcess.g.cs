

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoprocess.htm"/>
	/// </summary>
	public  partial class IfcRelAssignsToProcess : IfcRelAssigns
	{
		public IfcProcessSelect RelatingProcess{get;set;} 
		public IfcMeasureWithUnit QuantityInProcess{get;set;} // optional


		/// <summary>
		/// Construct a IfcRelAssignsToProcess with all required attributes.
		/// </summary>
		public IfcRelAssignsToProcess(IfcGloballyUniqueId globalId,List<IfcObjectDefinition> relatedObjects,IfcProcessSelect relatingProcess):base(globalId,relatedObjects)
		{

			RelatingProcess = relatingProcess;

		}
		/// <summary>
		/// Construct a IfcRelAssignsToProcess with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssignsToProcess(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObjectDefinition> relatedObjects,IfcObjectTypeEnum relatedObjectsType,IfcProcessSelect relatingProcess,IfcMeasureWithUnit quantityInProcess):base(globalId,ownerHistory,name,description,relatedObjects,relatedObjectsType)
		{

			RelatingProcess = relatingProcess;
			QuantityInProcess = quantityInProcess;

		}
		public static new IfcRelAssignsToProcess FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssignsToProcess>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatedObjectsType.ToStepValue());
			parameters.Add(RelatingProcess != null ? RelatingProcess.ToStepValue() : "$");
			parameters.Add(QuantityInProcess != null ? QuantityInProcess.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
