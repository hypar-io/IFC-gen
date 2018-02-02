

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbytype.htm"/>
	/// </summary>
	public  partial class IfcRelDefinesByType : IfcRelDefines
	{
		public List<IfcObject> RelatedObjects{get;set;} 
		public IfcTypeObject RelatingType{get;set;} 


		/// <summary>
		/// Construct a IfcRelDefinesByType with all required attributes.
		/// </summary>
		public IfcRelDefinesByType(IfcGloballyUniqueId globalId,List<IfcObject> relatedObjects,IfcTypeObject relatingType):base(globalId)
		{

			RelatedObjects = relatedObjects;
			RelatingType = relatingType;

		}
		/// <summary>
		/// Construct a IfcRelDefinesByType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDefinesByType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObject> relatedObjects,IfcTypeObject relatingType):base(globalId,ownerHistory,name,description)
		{

			RelatedObjects = relatedObjects;
			RelatingType = relatingType;

		}
		public static new IfcRelDefinesByType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDefinesByType>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingType != null ? RelatingType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
