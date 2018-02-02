

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproceduretype.htm"/>
	/// </summary>
	public  partial class IfcProcedureType : IfcTypeProcess
	{
		public IfcProcedureTypeEnum PredefinedType{get;set;} 


		/// <summary>
		/// Construct a IfcProcedureType with all required attributes.
		/// </summary>
		public IfcProcedureType(IfcGloballyUniqueId globalId,IfcProcedureTypeEnum predefinedType):base(globalId)
		{

			PredefinedType = predefinedType;

		}
		/// <summary>
		/// Construct a IfcProcedureType with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProcedureType(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel processType,IfcProcedureTypeEnum predefinedType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets,identification,longDescription,processType)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcProcedureType FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProcedureType>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ApplicableOccurrence != null ? ApplicableOccurrence.ToStepValue() : "$");
			parameters.Add(HasPropertySets != null ? HasPropertySets.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(LongDescription != null ? LongDescription.ToStepValue() : "$");
			parameters.Add(ProcessType != null ? ProcessType.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
