

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementassembly.htm"/>
	/// </summary>
	public  partial class IfcElementAssembly : IfcElement
	{
		public IfcAssemblyPlaceEnum AssemblyPlace{get;set;} // optional
		public IfcElementAssemblyTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcElementAssembly with all required attributes.
		/// </summary>
		public IfcElementAssembly(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcElementAssembly with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcElementAssembly(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcAssemblyPlaceEnum assemblyPlace,IfcElementAssemblyTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			AssemblyPlace = assemblyPlace;
			PredefinedType = predefinedType;

		}
		public static new IfcElementAssembly FromJSON(string json){ return JsonConvert.DeserializeObject<IfcElementAssembly>(json); }

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
			parameters.Add(AssemblyPlace.ToStepValue());
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
