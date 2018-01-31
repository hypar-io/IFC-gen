

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralactivity.htm"/>
	/// </summary>
	public  partial class IfcRelConnectsStructuralActivity : IfcRelConnects
	{
		public IfcStructuralActivityAssignmentSelect RelatingElement{get;set;} 
		public IfcStructuralActivity RelatedStructuralActivity{get;set;} 


		/// <summary>
		/// Construct a IfcRelConnectsStructuralActivity with all required attributes.
		/// </summary>
		public IfcRelConnectsStructuralActivity(IfcGloballyUniqueId globalId,IfcStructuralActivityAssignmentSelect relatingElement,IfcStructuralActivity relatedStructuralActivity):base(globalId)
		{

			RelatingElement = relatingElement;
			RelatedStructuralActivity = relatedStructuralActivity;

		}
		/// <summary>
		/// Construct a IfcRelConnectsStructuralActivity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelConnectsStructuralActivity(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcStructuralActivityAssignmentSelect relatingElement,IfcStructuralActivity relatedStructuralActivity):base(globalId,ownerHistory,name,description)
		{

			RelatingElement = relatingElement;
			RelatedStructuralActivity = relatedStructuralActivity;

		}
		public static new IfcRelConnectsStructuralActivity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelConnectsStructuralActivity>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingElement != null ? RelatingElement.ToStepValue() : "$");
			parameters.Add(RelatedStructuralActivity != null ? RelatedStructuralActivity.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
