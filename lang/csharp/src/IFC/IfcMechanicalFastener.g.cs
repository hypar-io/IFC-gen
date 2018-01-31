

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalfastener.htm"/>
	/// </summary>
	public  partial class IfcMechanicalFastener : IfcElementComponent
	{
		public IfcPositiveLengthMeasure NominalDiameter{get;set;} // optional
		public IfcPositiveLengthMeasure NominalLength{get;set;} // optional
		public IfcMechanicalFastenerTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcMechanicalFastener with all required attributes.
		/// </summary>
		public IfcMechanicalFastener(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcMechanicalFastener with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMechanicalFastener(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcPositiveLengthMeasure nominalDiameter,IfcPositiveLengthMeasure nominalLength,IfcMechanicalFastenerTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			NominalDiameter = nominalDiameter;
			NominalLength = nominalLength;
			PredefinedType = predefinedType;

		}
		public static new IfcMechanicalFastener FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMechanicalFastener>(json); }

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
			parameters.Add(NominalDiameter != null ? NominalDiameter.ToStepValue() : "$");
			parameters.Add(NominalLength != null ? NominalLength.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
