

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindow.htm"/>
	/// </summary>
	public  partial class IfcWindow : IfcBuildingElement
	{
		public IfcPositiveLengthMeasure OverallHeight{get;set;} // optional
		public IfcPositiveLengthMeasure OverallWidth{get;set;} // optional
		public IfcWindowTypeEnum PredefinedType{get;set;} // optional
		public IfcWindowTypePartitioningEnum PartitioningType{get;set;} // optional
		public IfcLabel UserDefinedPartitioningType{get;set;} // optional


		/// <summary>
		/// Construct a IfcWindow with all required attributes.
		/// </summary>
		public IfcWindow(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcWindow with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWindow(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcPositiveLengthMeasure overallHeight,IfcPositiveLengthMeasure overallWidth,IfcWindowTypeEnum predefinedType,IfcWindowTypePartitioningEnum partitioningType,IfcLabel userDefinedPartitioningType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			OverallHeight = overallHeight;
			OverallWidth = overallWidth;
			PredefinedType = predefinedType;
			PartitioningType = partitioningType;
			UserDefinedPartitioningType = userDefinedPartitioningType;

		}
		public static new IfcWindow FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWindow>(json); }

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
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");
			parameters.Add(OverallHeight != null ? OverallHeight.ToStepValue() : "$");
			parameters.Add(OverallWidth != null ? OverallWidth.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(PartitioningType.ToStepValue());
			parameters.Add(UserDefinedPartitioningType != null ? UserDefinedPartitioningType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
