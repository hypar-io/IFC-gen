

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorstandardcase.htm"/>
	/// </summary>
	public  partial class IfcDoorStandardCase : IfcDoor
	{


		/// <summary>
		/// Construct a IfcDoorStandardCase with all required attributes.
		/// </summary>
		public IfcDoorStandardCase(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcDoorStandardCase with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDoorStandardCase(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcPositiveLengthMeasure overallHeight,IfcPositiveLengthMeasure overallWidth,IfcDoorTypeEnum predefinedType,IfcDoorTypeOperationEnum operationType,IfcLabel userDefinedOperationType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag,overallHeight,overallWidth,predefinedType,operationType,userDefinedOperationType)
		{


		}
		public static new IfcDoorStandardCase FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDoorStandardCase>(json); }

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
