

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifczone.htm"/>
	/// </summary>
	public  partial class IfcZone : IfcSystem
	{
		public IfcLabel LongName{get;set;} // optional


		/// <summary>
		/// Construct a IfcZone with all required attributes.
		/// </summary>
		public IfcZone(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcZone with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcZone(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLabel longName):base(globalId,ownerHistory,name,description,objectType)
		{

			LongName = longName;

		}
		public static new IfcZone FromJSON(string json){ return JsonConvert.DeserializeObject<IfcZone>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
