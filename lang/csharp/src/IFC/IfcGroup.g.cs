

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgroup.htm"/>
	/// </summary>
	public  partial class IfcGroup : IfcObject
	{
		public List<IfcRelAssignsToGroup> IsGroupedBy{get;set;} // inverse


		/// <summary>
		/// Construct a IfcGroup with all required attributes.
		/// </summary>
		public IfcGroup(IfcGloballyUniqueId globalId):base(globalId)
		{
			IsGroupedBy = new List<IfcRelAssignsToGroup>();


		}
		/// <summary>
		/// Construct a IfcGroup with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGroup(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType):base(globalId,ownerHistory,name,description,objectType)
		{
			IsGroupedBy = new List<IfcRelAssignsToGroup>();


		}
		public static new IfcGroup FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGroup>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
