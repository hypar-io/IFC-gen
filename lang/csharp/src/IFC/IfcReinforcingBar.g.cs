

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbar.htm"/>
	/// </summary>
	public  partial class IfcReinforcingBar : IfcReinforcingElement
	{
		public IfcPositiveLengthMeasure NominalDiameter{get;set;} // optional
		public IfcAreaMeasure CrossSectionArea{get;set;} // optional
		public IfcPositiveLengthMeasure BarLength{get;set;} // optional
		public IfcReinforcingBarTypeEnum PredefinedType{get;set;} // optional
		public IfcReinforcingBarSurfaceEnum BarSurface{get;set;} // optional


		/// <summary>
		/// Construct a IfcReinforcingBar with all required attributes.
		/// </summary>
		public IfcReinforcingBar(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcReinforcingBar with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReinforcingBar(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcLabel steelGrade,IfcPositiveLengthMeasure nominalDiameter,IfcAreaMeasure crossSectionArea,IfcPositiveLengthMeasure barLength,IfcReinforcingBarTypeEnum predefinedType,IfcReinforcingBarSurfaceEnum barSurface):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag,steelGrade)
		{

			NominalDiameter = nominalDiameter;
			CrossSectionArea = crossSectionArea;
			BarLength = barLength;
			PredefinedType = predefinedType;
			BarSurface = barSurface;

		}
		public static new IfcReinforcingBar FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReinforcingBar>(json); }

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
			parameters.Add(SteelGrade != null ? SteelGrade.ToStepValue() : "$");
			parameters.Add(NominalDiameter != null ? NominalDiameter.ToStepValue() : "$");
			parameters.Add(CrossSectionArea != null ? CrossSectionArea.ToStepValue() : "$");
			parameters.Add(BarLength != null ? BarLength.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());
			parameters.Add(BarSurface.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
