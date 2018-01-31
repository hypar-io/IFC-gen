

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstairflight.htm"/>
	/// </summary>
	public  partial class IfcStairFlight : IfcBuildingElement
	{
		public IfcInteger NumberOfRisers{get;set;} // optional
		public IfcInteger NumberOfTreads{get;set;} // optional
		public IfcPositiveLengthMeasure RiserHeight{get;set;} // optional
		public IfcPositiveLengthMeasure TreadLength{get;set;} // optional
		public IfcStairFlightTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcStairFlight with all required attributes.
		/// </summary>
		public IfcStairFlight(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcStairFlight with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStairFlight(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag,IfcInteger numberOfRisers,IfcInteger numberOfTreads,IfcPositiveLengthMeasure riserHeight,IfcPositiveLengthMeasure treadLength,IfcStairFlightTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{

			NumberOfRisers = numberOfRisers;
			NumberOfTreads = numberOfTreads;
			RiserHeight = riserHeight;
			TreadLength = treadLength;
			PredefinedType = predefinedType;

		}
		public static new IfcStairFlight FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStairFlight>(json); }

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
			parameters.Add(NumberOfRisers != null ? NumberOfRisers.ToStepValue() : "$");
			parameters.Add(NumberOfTreads != null ? NumberOfTreads.ToStepValue() : "$");
			parameters.Add(RiserHeight != null ? RiserHeight.ToStepValue() : "$");
			parameters.Add(TreadLength != null ? TreadLength.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
