

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefinesbyobject.htm"/>
	/// </summary>
	public  partial class IfcRelDefinesByObject : IfcRelDefines
	{
		public List<IfcObject> RelatedObjects{get;set;} 
		public IfcObject RelatingObject{get;set;} 


		/// <summary>
		/// Construct a IfcRelDefinesByObject with all required attributes.
		/// </summary>
		public IfcRelDefinesByObject(IfcGloballyUniqueId globalId,List<IfcObject> relatedObjects,IfcObject relatingObject):base(globalId)
		{

			RelatedObjects = relatedObjects;
			RelatingObject = relatingObject;

		}
		/// <summary>
		/// Construct a IfcRelDefinesByObject with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelDefinesByObject(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcObject> relatedObjects,IfcObject relatingObject):base(globalId,ownerHistory,name,description)
		{

			RelatedObjects = relatedObjects;
			RelatingObject = relatingObject;

		}
		public static new IfcRelDefinesByObject FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelDefinesByObject>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingObject != null ? RelatingObject.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
