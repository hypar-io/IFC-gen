

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeobject.htm"/>
	/// </summary>
	public  partial class IfcTypeObject : IfcObjectDefinition
	{
		public IfcIdentifier ApplicableOccurrence{get;set;} // optional
		public List<IfcPropertySetDefinition> HasPropertySets{get;set;} // optional
		public List<IfcRelDefinesByType> Types{get;set;} // inverse


		/// <summary>
		/// Construct a IfcTypeObject with all required attributes.
		/// </summary>
		public IfcTypeObject(IfcGloballyUniqueId globalId):base(globalId)
		{
			HasPropertySets = new List<IfcPropertySetDefinition>();
			Types = new List<IfcRelDefinesByType>();


		}
		/// <summary>
		/// Construct a IfcTypeObject with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTypeObject(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets):base(globalId,ownerHistory,name,description)
		{
			Types = new List<IfcRelDefinesByType>();

			ApplicableOccurrence = applicableOccurrence;
			HasPropertySets = hasPropertySets;

		}
		public static new IfcTypeObject FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTypeObject>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ApplicableOccurrence != null ? ApplicableOccurrence.ToStepValue() : "$");
			parameters.Add(HasPropertySets != null ? HasPropertySets.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
