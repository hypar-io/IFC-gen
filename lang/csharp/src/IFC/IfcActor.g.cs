

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactor.htm"/>
	/// </summary>
	public  partial class IfcActor : IfcObject
	{
		public IfcActorSelect TheActor{get;set;} 
		public List<IfcRelAssignsToActor> IsActingUpon{get;set;} // inverse


		/// <summary>
		/// Construct a IfcActor with all required attributes.
		/// </summary>
		public IfcActor(IfcGloballyUniqueId globalId,IfcActorSelect theActor):base(globalId)
		{
			IsActingUpon = new List<IfcRelAssignsToActor>();

			TheActor = theActor;

		}
		/// <summary>
		/// Construct a IfcActor with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcActor(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcActorSelect theActor):base(globalId,ownerHistory,name,description,objectType)
		{
			IsActingUpon = new List<IfcRelAssignsToActor>();

			TheActor = theActor;

		}
		public static new IfcActor FromJSON(string json){ return JsonConvert.DeserializeObject<IfcActor>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(TheActor != null ? TheActor.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
