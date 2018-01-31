

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionreinforcementproperties.htm"/>
	/// </summary>
	public  partial class IfcSectionReinforcementProperties : IfcPreDefinedProperties
	{
		public IfcLengthMeasure LongitudinalStartPosition{get;set;} 
		public IfcLengthMeasure LongitudinalEndPosition{get;set;} 
		public IfcLengthMeasure TransversePosition{get;set;} // optional
		public IfcReinforcingBarRoleEnum ReinforcementRole{get;set;} 
		public IfcSectionProperties SectionDefinition{get;set;} 
		public List<IfcReinforcementBarProperties> CrossSectionReinforcementDefinitions{get;set;} 


		/// <summary>
		/// Construct a IfcSectionReinforcementProperties with all required attributes.
		/// </summary>
		public IfcSectionReinforcementProperties(IfcLengthMeasure longitudinalStartPosition,IfcLengthMeasure longitudinalEndPosition,IfcReinforcingBarRoleEnum reinforcementRole,IfcSectionProperties sectionDefinition,List<IfcReinforcementBarProperties> crossSectionReinforcementDefinitions):base()
		{

			LongitudinalStartPosition = longitudinalStartPosition;
			LongitudinalEndPosition = longitudinalEndPosition;
			ReinforcementRole = reinforcementRole;
			SectionDefinition = sectionDefinition;
			CrossSectionReinforcementDefinitions = crossSectionReinforcementDefinitions;

		}
		/// <summary>
		/// Construct a IfcSectionReinforcementProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSectionReinforcementProperties(IfcLengthMeasure longitudinalStartPosition,IfcLengthMeasure longitudinalEndPosition,IfcLengthMeasure transversePosition,IfcReinforcingBarRoleEnum reinforcementRole,IfcSectionProperties sectionDefinition,List<IfcReinforcementBarProperties> crossSectionReinforcementDefinitions):base()
		{

			LongitudinalStartPosition = longitudinalStartPosition;
			LongitudinalEndPosition = longitudinalEndPosition;
			TransversePosition = transversePosition;
			ReinforcementRole = reinforcementRole;
			SectionDefinition = sectionDefinition;
			CrossSectionReinforcementDefinitions = crossSectionReinforcementDefinitions;

		}
		public static new IfcSectionReinforcementProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSectionReinforcementProperties>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(LongitudinalStartPosition != null ? LongitudinalStartPosition.ToStepValue() : "$");
			parameters.Add(LongitudinalEndPosition != null ? LongitudinalEndPosition.ToStepValue() : "$");
			parameters.Add(TransversePosition != null ? TransversePosition.ToStepValue() : "$");
			parameters.Add(ReinforcementRole.ToStepValue());
			parameters.Add(SectionDefinition != null ? SectionDefinition.ToStepValue() : "$");
			parameters.Add(CrossSectionReinforcementDefinitions != null ? CrossSectionReinforcementDefinitions.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
