

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadcase.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadCase : IfcStructuralLoadGroup
	{
		public List<IfcRatioMeasure> SelfWeightCoefficients{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadCase with all required attributes.
		/// </summary>
		public IfcStructuralLoadCase(IfcGloballyUniqueId globalId,IfcLoadGroupTypeEnum predefinedType,IfcActionTypeEnum actionType,IfcActionSourceTypeEnum actionSource):base(globalId,predefinedType,actionType,actionSource)
		{
			SelfWeightCoefficients = new List<IfcRatioMeasure>();


		}
		/// <summary>
		/// Construct a IfcStructuralLoadCase with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadCase(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLoadGroupTypeEnum predefinedType,IfcActionTypeEnum actionType,IfcActionSourceTypeEnum actionSource,IfcRatioMeasure coefficient,IfcLabel purpose,List<IfcRatioMeasure> selfWeightCoefficients):base(globalId,ownerHistory,name,description,objectType,predefinedType,actionType,actionSource,coefficient,purpose)
		{

			SelfWeightCoefficients = selfWeightCoefficients;

		}
		public static new IfcStructuralLoadCase FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadCase>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(ActionType.ToStepValue());
			parameters.Add(ActionSource.ToStepValue());
			parameters.Add(Coefficient != null ? Coefficient.ToStepValue() : "$");
			parameters.Add(Purpose != null ? Purpose.ToStepValue() : "$");
			parameters.Add(SelfWeightCoefficients != null ? SelfWeightCoefficients.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
