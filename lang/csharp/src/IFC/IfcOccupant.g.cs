

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoccupant.htm"/>
	/// </summary>
	public  partial class IfcOccupant : IfcActor
	{
		public IfcOccupantTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcOccupant with all required attributes.
		/// </summary>
		public IfcOccupant(IfcGloballyUniqueId globalId,IfcActorSelect theActor):base(globalId,theActor)
		{


		}
		/// <summary>
		/// Construct a IfcOccupant with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOccupant(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcActorSelect theActor,IfcOccupantTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,theActor)
		{

			PredefinedType = predefinedType;

		}
		public static new IfcOccupant FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOccupant>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(TheActor != null ? TheActor.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
