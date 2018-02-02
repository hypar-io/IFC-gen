

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgrid.htm"/>
	/// </summary>
	public  partial class IfcGrid : IfcProduct
	{
		public List<IfcGridAxis> UAxes{get;set;} 
		public List<IfcGridAxis> VAxes{get;set;} 
		public List<IfcGridAxis> WAxes{get;set;} // optional
		public IfcGridTypeEnum PredefinedType{get;set;} // optional
		public List<IfcRelContainedInSpatialStructure> ContainedInStructure{get;set;} // inverse


		/// <summary>
		/// Construct a IfcGrid with all required attributes.
		/// </summary>
		public IfcGrid(IfcGloballyUniqueId globalId,List<IfcGridAxis> uAxes,List<IfcGridAxis> vAxes):base(globalId)
		{
			WAxes = new List<IfcGridAxis>();
			ContainedInStructure = new List<IfcRelContainedInSpatialStructure>();

			UAxes = uAxes;
			VAxes = vAxes;

		}
		/// <summary>
		/// Construct a IfcGrid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGrid(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,List<IfcGridAxis> uAxes,List<IfcGridAxis> vAxes,List<IfcGridAxis> wAxes,IfcGridTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			ContainedInStructure = new List<IfcRelContainedInSpatialStructure>();

			UAxes = uAxes;
			VAxes = vAxes;
			WAxes = wAxes;
			PredefinedType = predefinedType;

		}
		public static new IfcGrid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGrid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(ObjectPlacement != null ? ObjectPlacement.ToStepValue() : "$");
			parameters.Add(Representation != null ? Representation.ToStepValue() : "$");
			parameters.Add(UAxes != null ? UAxes.ToStepValue() : "$");
			parameters.Add(VAxes != null ? VAxes.ToStepValue() : "$");
			parameters.Add(WAxes != null ? WAxes.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
