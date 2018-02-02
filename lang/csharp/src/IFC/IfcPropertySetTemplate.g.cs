

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysettemplate.htm"/>
	/// </summary>
	public  partial class IfcPropertySetTemplate : IfcPropertyTemplateDefinition
	{
		public IfcPropertySetTemplateTypeEnum TemplateType{get;set;} // optional
		public IfcIdentifier ApplicableEntity{get;set;} // optional
		public List<IfcPropertyTemplate> HasPropertyTemplates{get;set;} 
		public List<IfcRelDefinesByTemplate> Defines{get;set;} // inverse


		/// <summary>
		/// Construct a IfcPropertySetTemplate with all required attributes.
		/// </summary>
		public IfcPropertySetTemplate(IfcGloballyUniqueId globalId,List<IfcPropertyTemplate> hasPropertyTemplates):base(globalId)
		{
			Defines = new List<IfcRelDefinesByTemplate>();

			HasPropertyTemplates = hasPropertyTemplates;

		}
		/// <summary>
		/// Construct a IfcPropertySetTemplate with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertySetTemplate(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcPropertySetTemplateTypeEnum templateType,IfcIdentifier applicableEntity,List<IfcPropertyTemplate> hasPropertyTemplates):base(globalId,ownerHistory,name,description)
		{
			Defines = new List<IfcRelDefinesByTemplate>();

			TemplateType = templateType;
			ApplicableEntity = applicableEntity;
			HasPropertyTemplates = hasPropertyTemplates;

		}
		public static new IfcPropertySetTemplate FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertySetTemplate>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(TemplateType.ToStepValue());
			parameters.Add(ApplicableEntity != null ? ApplicableEntity.ToStepValue() : "$");
			parameters.Add(HasPropertyTemplates != null ? HasPropertyTemplates.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
