

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprocedure.htm"/>
	/// </summary>
	public  partial class IfcProcedure : IfcProcess
	{
		public IfcProcedureTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcProcedure with all required attributes.
		/// </summary>
		public IfcProcedure(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcProcedure with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProcedure(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcText longDescription,IfcProcedureTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,identification,longDescription)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcProcedure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProcedure>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(LongDescription != null ? LongDescription.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
