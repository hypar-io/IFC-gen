

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablefitting.htm"/>
	/// </summary>
	public  partial class IfcCableFitting : IfcFlowFitting
	{
		public IfcCableFittingTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcCableFitting with all required attributes.
		/// </summary>
		public IfcCableFitting(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcCableFitting with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCableFitting(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcCableFittingTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcCableFitting FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCableFitting>(json); }

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
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
