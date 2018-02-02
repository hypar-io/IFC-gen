

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotation.htm"/>
	/// </summary>
	public  partial class IfcAnnotation : IfcProduct
	{
		public List<IfcRelContainedInSpatialStructure> ContainedInStructure{get;set;} // inverse


		/// <summary>
		/// Construct a IfcAnnotation with all required attributes.
		/// </summary>
		public IfcAnnotation(IfcGloballyUniqueId globalId):base(globalId)
		{
			ContainedInStructure = new List<IfcRelContainedInSpatialStructure>();


		}
		/// <summary>
		/// Construct a IfcAnnotation with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcAnnotation(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{
			ContainedInStructure = new List<IfcRelContainedInSpatialStructure>();


		}
		public static new IfcAnnotation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcAnnotation>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
