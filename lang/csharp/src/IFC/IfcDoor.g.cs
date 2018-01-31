

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoor.htm"/>
	/// </summary>
	public  partial class IfcDoor : IfcBuildingElement
	{
		public IfcPositiveLengthMeasure OverallHeight{get;set;} // optional
		public IfcPositiveLengthMeasure OverallWidth{get;set;} // optional
		public IfcDoorTypeEnum PredefinedType{get;set;} // optional
		public IfcDoorTypeOperationEnum OperationType{get;set;} // optional
		public IfcLabel UserDefinedOperationType{get;set;} // optional


		/// <summary>
		/// Construct a IfcDoor with all required attributes.
		/// </summary>
		public IfcDoor(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDoor with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDoor(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcPositiveLengthMeasure overallHeight,IfcPositiveLengthMeasure overallWidth,IfcDoorTypeEnum predefinedType,IfcDoorTypeOperationEnum operationType,IfcLabel userDefinedOperationType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			OverallHeight = overallHeight;
			OverallWidth = overallWidth;
			PredefinedType = predefinedType;
			OperationType = operationType;
			UserDefinedOperationType = userDefinedOperationType;

		}
		public static new IfcDoor FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoor>(json); }

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
			parameters.Add(OperationType.ToStepValue());
			parameters.Add(UserDefinedOperationType != null ? UserDefinedOperationType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
