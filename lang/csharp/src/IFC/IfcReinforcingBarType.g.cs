

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbartype.htm"/>
	/// </summary>
	public  partial class IfcReinforcingBarType : IfcReinforcingElementType
	{
		public IfcReinforcingBarTypeEnum PredefinedType{get;set;} 
		public IfcPositiveLengthMeasure NominalDiameter{get;set;} // optional
		public IfcAreaMeasure CrossSectionArea{get;set;} // optional
		public IfcPositiveLengthMeasure BarLength{get;set;} // optional
		public IfcReinforcingBarSurfaceEnum BarSurface{get;set;} // optional
		public IfcLabel BendingShapeCode{get;set;} // optional
		public List<IfcBendingParameterSelect> BendingParameters{get;set;} // optional


		/// <summary>
		/// Construct a IfcReinforcingBarType with all required attributes.
		/// </summary>
		public IfcReinforcingBarType(IfcGloballyUniqueId globalId,IfcReinforcingBarTypeEnum predefinedType):base(globalId)
		{
			BendingParameters = new List<IfcBendingParameterSelect>();

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcReinforcingBarType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReinforcingBarType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,List<IfcRepresentationMap> representationMaps,IfcLabel tag,IfcLabel elementType,IfcReinforcingBarTypeEnum predefinedType,IfcPositiveLengthMeasure nominalDiameter,IfcAreaMeasure crossSectionArea,IfcPositiveLengthMeasure barLength,IfcReinforcingBarSurfaceEnum barSurface,IfcLabel bendingShapeCode,List<IfcBendingParameterSelect> bendingParameters):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,representationMaps,tag,elementType)
		{

			PredefinedType = predefinedType;
			NominalDiameter = nominalDiameter;
			CrossSectionArea = crossSectionArea;
			BarLength = barLength;
			BarSurface = barSurface;
			BendingShapeCode = bendingShapeCode;
			BendingParameters = bendingParameters;

		}
		public static new IfcReinforcingBarType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReinforcingBarType>(json); }

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
			parameters.Add(CrossSectionArea != null ? CrossSectionArea.ToStepValue() : "$");
			parameters.Add(BarLength != null ? BarLength.ToStepValue() : "$");
			parameters.Add(BarSurface.ToStepValue());
			parameters.Add(BendingShapeCode != null ? BendingShapeCode.ToStepValue() : "$");
			parameters.Add(BendingParameters != null ? BendingParameters.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
