

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccovering.htm"/>
	/// </summary>
	public  partial class IfcCovering : IfcBuildingElement
	{
		public IfcCoveringTypeEnum PredefinedType{get;set;} // optional
		public List<IfcRelCoversSpaces> CoversSpaces{get;set;} // inverse
		public List<IfcRelCoversBldgElements> CoversElements{get;set;} // inverse


		/// <summary>
		/// Construct a IfcCovering with all required attributes.
		/// </summary>
		public IfcCovering(IfcGloballyUniqueId globalId):base(globalId)
		{
			CoversSpaces = new List<IfcRelCoversSpaces>();
			CoversElements = new List<IfcRelCoversBldgElements>();


		}
		/// <summary>
		/// Construct a IfcCovering with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCovering(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcCoveringTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{
			CoversSpaces = new List<IfcRelCoversSpaces>();
			CoversElements = new List<IfcRelCoversBldgElements>();

			PredefinedType = predefinedType;

		}
		public static new IfcCovering FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCovering>(json); }

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
