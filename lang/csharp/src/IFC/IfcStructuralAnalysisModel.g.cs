

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralanalysismodel.htm"/>
	/// </summary>
	public  partial class IfcStructuralAnalysisModel : IfcSystem
	{
		public IfcAnalysisModelTypeEnum PredefinedType{get;set;} 
		public IfcAxis2Placement3D OrientationOf2DPlane{get;set;} // optional
		public List<IfcStructuralLoadGroup> LoadedBy{get;set;} // optional
		public List<IfcStructuralResultGroup> HasResults{get;set;} // optional
		public IfcObjectPlacement SharedPlacement{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralAnalysisModel with all required attributes.
		/// </summary>
		public IfcStructuralAnalysisModel(IfcGloballyUniqueId globalId,IfcAnalysisModelTypeEnum predefinedType):base(globalId)
		{
			LoadedBy = new List<IfcStructuralLoadGroup>();
			HasResults = new List<IfcStructuralResultGroup>();

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcStructuralAnalysisModel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralAnalysisModel(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcAnalysisModelTypeEnum predefinedType,IfcAxis2Placement3D orientationOf2DPlane,List<IfcStructuralLoadGroup> loadedBy,List<IfcStructuralResultGroup> hasResults,IfcObjectPlacement sharedPlacement):base(globalId,ownerHistory,name,description,objectType)
		{

			PredefinedType = predefinedType;
			OrientationOf2DPlane = orientationOf2DPlane;
			LoadedBy = loadedBy;
			HasResults = hasResults;
			SharedPlacement = sharedPlacement;

		}
		public static new IfcStructuralAnalysisModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralAnalysisModel>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(OrientationOf2DPlane != null ? OrientationOf2DPlane.ToStepValue() : "$");
			parameters.Add(LoadedBy != null ? LoadedBy.ToStepValue() : "$");
			parameters.Add(HasResults != null ? HasResults.ToStepValue() : "$");
			parameters.Add(SharedPlacement != null ? SharedPlacement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
