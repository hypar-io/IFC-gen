

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadgroup.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadGroup : IfcGroup
	{
		public IfcLoadGroupTypeEnum PredefinedType{get;set;} 
		public IfcActionTypeEnum ActionType{get;set;} 
		public IfcActionSourceTypeEnum ActionSource{get;set;} 
		public IfcRatioMeasure Coefficient{get;set;} // optional
		public IfcLabel Purpose{get;set;} // optional
		public List<IfcStructuralResultGroup> SourceOfResultGroup{get;set;} // inverse
		public List<IfcStructuralAnalysisModel> LoadGroupFor{get;set;} // inverse


		/// <summary>
		/// Construct a IfcStructuralLoadGroup with all required attributes.
		/// </summary>
		public IfcStructuralLoadGroup(IfcGloballyUniqueId globalId,IfcLoadGroupTypeEnum predefinedType,IfcActionTypeEnum actionType,IfcActionSourceTypeEnum actionSource):base(globalId)
		{
			SourceOfResultGroup = new List<IfcStructuralResultGroup>();
			LoadGroupFor = new List<IfcStructuralAnalysisModel>();

			PredefinedType = predefinedType;
			ActionType = actionType;
			ActionSource = actionSource;

		}
		/// <summary>
		/// Construct a IfcStructuralLoadGroup with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadGroup(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLoadGroupTypeEnum predefinedType,IfcActionTypeEnum actionType,IfcActionSourceTypeEnum actionSource,IfcRatioMeasure coefficient,IfcLabel purpose):base(globalId,ownerHistory,name,description,objectType)
		{
			SourceOfResultGroup = new List<IfcStructuralResultGroup>();
			LoadGroupFor = new List<IfcStructuralAnalysisModel>();

			PredefinedType = predefinedType;
			ActionType = actionType;
			ActionSource = actionSource;
			Coefficient = coefficient;
			Purpose = purpose;

		}
		public static new IfcStructuralLoadGroup FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadGroup>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
