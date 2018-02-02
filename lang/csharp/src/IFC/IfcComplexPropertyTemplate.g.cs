

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexpropertytemplate.htm"/>
	/// </summary>
	public  partial class IfcComplexPropertyTemplate : IfcPropertyTemplate
	{
		public IfcLabel UsageName{get;set;} // optional
		public IfcComplexPropertyTemplateTypeEnum TemplateType{get;set;} // optional
		public List<IfcPropertyTemplate> HasPropertyTemplates{get;set;} // optional


		/// <summary>
		/// Construct a IfcComplexPropertyTemplate with all required attributes.
		/// </summary>
		public IfcComplexPropertyTemplate(IfcGloballyUniqueId globalId):base(globalId)
		{
			HasPropertyTemplates = new List<IfcPropertyTemplate>();


		}
		/// <summary>
		/// Construct a IfcComplexPropertyTemplate with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcComplexPropertyTemplate(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel usageName,IfcComplexPropertyTemplateTypeEnum templateType,List<IfcPropertyTemplate> hasPropertyTemplates):base(globalId,ownerHistory,name,description)
		{

			UsageName = usageName;
			TemplateType = templateType;
			HasPropertyTemplates = hasPropertyTemplates;

		}
		public static new IfcComplexPropertyTemplate FromJSON(string json){ return JsonConvert.DeserializeObject<IfcComplexPropertyTemplate>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(UsageName != null ? UsageName.ToStepValue() : "$");
			parameters.Add(TemplateType.ToStepValue());
			parameters.Add(HasPropertyTemplates != null ? HasPropertyTemplates.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
