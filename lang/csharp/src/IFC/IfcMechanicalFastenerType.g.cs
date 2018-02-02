

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastenertype.htm"/>
	/// </summary>
	public  partial class IfcMechanicalFastenerType : IfcElementComponentType
	{
		public IfcMechanicalFastenerTypeEnum PredefinedType{get;set;} 
		public IfcPositiveLengthMeasure NominalDiameter{get;set;} // optional
		public IfcPositiveLengthMeasure NominalLength{get;set;} // optional


		/// <summary>
		/// Construct a IfcMechanicalFastenerType with all required attributes.
		/// </summary>
		public IfcMechanicalFastenerType(IfcGloballyUniqueId globalId,IfcMechanicalFastenerTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcMechanicalFastenerType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMechanicalFastenerType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcMechanicalFastenerTypeEnum predefinedType,IfcPositiveLengthMeasure nominalDiameter,IfcPositiveLengthMeasure nominalLength):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			NominalDiameter = nominalDiameter;
			NominalLength = nominalLength;

		}
		public static new IfcMechanicalFastenerType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMechanicalFastenerType>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ApplicableOccurrence != null ? ApplicableOccurrence.ToStepValue() : "$");
			parameters.Add(HasPropertySets != null ? HasPropertySets.ToStepValue() : "$");
			parameters.Add(RepresentationMaps != null ? RepresentationMaps.ToStepValue() : "$");
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");
			parameters.Add(ElementType != null ? ElementType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(NominalDiameter != null ? NominalDiameter.ToStepValue() : "$");
			parameters.Add(NominalLength != null ? NominalLength.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
