

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesconstraint.htm"/>
	/// </summary>
	public  partial class IfcRelAssociatesConstraint : IfcRelAssociates
	{
		public IfcLabel Intent{get;set;} // optional
		public IfcConstraint RelatingConstraint{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssociatesConstraint with all required attributes.
		/// </summary>
		public IfcRelAssociatesConstraint(IfcGloballyUniqueId globalId,List<IfcDefinitionSelect> relatedObjects,IfcConstraint relatingConstraint):base(globalId,relatedObjects)
		{

			RelatingConstraint = relatingConstraint;

		}
		/// <summary>
		/// Construct a IfcRelAssociatesConstraint with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssociatesConstraint(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDefinitionSelect> relatedObjects,IfcLabel intent,IfcConstraint relatingConstraint):base(globalId,ownerHistory,name,description,relatedObjects)
		{

			Intent = intent;
			RelatingConstraint = relatingConstraint;

		}
		public static new IfcRelAssociatesConstraint FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssociatesConstraint>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(Intent != null ? Intent.ToStepValue() : "$");
			parameters.Add(RelatingConstraint != null ? RelatingConstraint.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
