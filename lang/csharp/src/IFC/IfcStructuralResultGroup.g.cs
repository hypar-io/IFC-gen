

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralresultgroup.htm"/>
	/// </summary>
	public  partial class IfcStructuralResultGroup : IfcGroup
	{
		public IfcAnalysisTheoryTypeEnum TheoryType{get;set;} 
		public IfcStructuralLoadGroup ResultForLoadGroup{get;set;} // optional
		public IfcBoolean IsLinear{get;set;} 
		public List<IfcStructuralAnalysisModel> ResultGroupFor{get;set;} // inverse


		/// <summary>
		/// Construct a IfcStructuralResultGroup with all required attributes.
		/// </summary>
		public IfcStructuralResultGroup(IfcGloballyUniqueId globalId,IfcAnalysisTheoryTypeEnum theoryType,IfcBoolean isLinear):base(globalId)
		{
			ResultGroupFor = new List<IfcStructuralAnalysisModel>();

			TheoryType = theoryType;
			IsLinear = isLinear;

		}
		/// <summary>
		/// Construct a IfcStructuralResultGroup with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralResultGroup(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcAnalysisTheoryTypeEnum theoryType,IfcStructuralLoadGroup resultForLoadGroup,IfcBoolean isLinear):base(globalId,ownerHistory,name,description,objectType)
		{
			ResultGroupFor = new List<IfcStructuralAnalysisModel>();

			TheoryType = theoryType;
			ResultForLoadGroup = resultForLoadGroup;
			IsLinear = isLinear;

		}
		public static new IfcStructuralResultGroup FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralResultGroup>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(TheoryType.ToStepValue());
			parameters.Add(ResultForLoadGroup != null ? ResultForLoadGroup.ToStepValue() : "$");
			parameters.Add(IsLinear != null ? IsLinear.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
