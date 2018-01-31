

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopeningelement.htm"/>
	/// </summary>
	public  partial class IfcOpeningElement : IfcFeatureElementSubtraction
	{
		public IfcOpeningElementTypeEnum PredefinedType{get;set;} // optional
		public List<IfcRelFillsElement> HasFillings{get;set;} // inverse


		/// <summary>
		/// Construct a IfcOpeningElement with all required attributes.
		/// </summary>
		public IfcOpeningElement(IfcGloballyUniqueId globalId):base(globalId)
		{
			HasFillings = new List<IfcRelFillsElement>();


		}
		/// <summary>
		/// Construct a IfcOpeningElement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOpeningElement(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcOpeningElementTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{
			HasFillings = new List<IfcRelFillsElement>();

			PredefinedType = predefinedType;

		}
		public static new IfcOpeningElement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOpeningElement>(json); }

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
