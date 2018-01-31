

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelinterfereselements.htm"/>
	/// </summary>
	public  partial class IfcRelInterferesElements : IfcRelConnects
	{
		public IfcElement RelatingElement{get;set;} 
		public IfcElement RelatedElement{get;set;} 
		public IfcConnectionGeometry InterferenceGeometry{get;set;} // optional
		public IfcIdentifier InterferenceType{get;set;} // optional
		public bool? ImpliedOrder{get;set;} 


		/// <summary>
		/// Construct a IfcRelInterferesElements with all required attributes.
		/// </summary>
		public IfcRelInterferesElements(IfcGloballyUniqueId globalId,IfcElement relatingElement,IfcElement relatedElement,bool? impliedOrder):base(globalId)
		{

			RelatingElement = relatingElement;
			RelatedElement = relatedElement;
			ImpliedOrder = impliedOrder;

		}
		/// <summary>
		/// Construct a IfcRelInterferesElements with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelInterferesElements(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcElement relatingElement,IfcElement relatedElement,IfcConnectionGeometry interferenceGeometry,IfcIdentifier interferenceType,bool? impliedOrder):base(globalId,ownerHistory,name,description)
		{

			RelatingElement = relatingElement;
			RelatedElement = relatedElement;
			InterferenceGeometry = interferenceGeometry;
			InterferenceType = interferenceType;
			ImpliedOrder = impliedOrder;

		}
		public static new IfcRelInterferesElements FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelInterferesElements>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingElement != null ? RelatingElement.ToStepValue() : "$");
			parameters.Add(RelatedElement != null ? RelatedElement.ToStepValue() : "$");
			parameters.Add(InterferenceGeometry != null ? InterferenceGeometry.ToStepValue() : "$");
			parameters.Add(InterferenceType != null ? InterferenceType.ToStepValue() : "$");
			parameters.Add(ImpliedOrder != null ? ImpliedOrder.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
