

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimplepropertytemplate.htm"/>
	/// </summary>
	public  partial class IfcSimplePropertyTemplate : IfcPropertyTemplate
	{
		public IfcSimplePropertyTemplateTypeEnum TemplateType{get;set;} // optional
		public IfcLabel PrimaryMeasureType{get;set;} // optional
		public IfcLabel SecondaryMeasureType{get;set;} // optional
		public IfcPropertyEnumeration Enumerators{get;set;} // optional
		public IfcUnit PrimaryUnit{get;set;} // optional
		public IfcUnit SecondaryUnit{get;set;} // optional
		public IfcLabel Expression{get;set;} // optional
		public IfcStateEnum AccessState{get;set;} // optional


		/// <summary>
		/// Construct a IfcSimplePropertyTemplate with all required attributes.
		/// </summary>
		public IfcSimplePropertyTemplate(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcSimplePropertyTemplate with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSimplePropertyTemplate(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcSimplePropertyTemplateTypeEnum templateType,IfcLabel primaryMeasureType,IfcLabel secondaryMeasureType,IfcPropertyEnumeration enumerators,IfcUnit primaryUnit,IfcUnit secondaryUnit,IfcLabel expression,IfcStateEnum accessState):base(globalId,ownerHistory,name,description)
		{

			TemplateType = templateType;
			PrimaryMeasureType = primaryMeasureType;
			SecondaryMeasureType = secondaryMeasureType;
			Enumerators = enumerators;
			PrimaryUnit = primaryUnit;
			SecondaryUnit = secondaryUnit;
			Expression = expression;
			AccessState = accessState;

		}
		public static new IfcSimplePropertyTemplate FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSimplePropertyTemplate>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(TemplateType.ToStepValue());
			parameters.Add(PrimaryMeasureType != null ? PrimaryMeasureType.ToStepValue() : "$");
			parameters.Add(SecondaryMeasureType != null ? SecondaryMeasureType.ToStepValue() : "$");
			parameters.Add(Enumerators != null ? Enumerators.ToStepValue() : "$");
			parameters.Add(PrimaryUnit != null ? PrimaryUnit.ToStepValue() : "$");
			parameters.Add(SecondaryUnit != null ? SecondaryUnit.ToStepValue() : "$");
			parameters.Add(Expression != null ? Expression.ToStepValue() : "$");
			parameters.Add(AccessState.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
