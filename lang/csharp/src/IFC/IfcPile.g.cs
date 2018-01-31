

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpile.htm"/>
	/// </summary>
	public  partial class IfcPile : IfcBuildingElement
	{
		public IfcPileTypeEnum PredefinedType{get;set;} // optional
		public IfcPileConstructionEnum ConstructionType{get;set;} // optional


		/// <summary>
		/// Construct a IfcPile with all required attributes.
		/// </summary>
		public IfcPile(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcPile with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPile(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcPileTypeEnum predefinedType,IfcPileConstructionEnum constructionType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			PredefinedType = predefinedType;
			ConstructionType = constructionType;

		}
		public static new IfcPile FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPile>(json); }

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
			parameters.Add(ConstructionType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
