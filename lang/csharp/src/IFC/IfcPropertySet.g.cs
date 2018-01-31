

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyset.htm"/>
	/// </summary>
	public  partial class IfcPropertySet : IfcPropertySetDefinition
	{
		public List<IfcProperty> HasProperties{get;set;} 


		/// <summary>
		/// Construct a IfcPropertySet with all required attributes.
		/// </summary>
		public IfcPropertySet(IfcGloballyUniqueId globalId,List<IfcProperty> hasProperties):base(globalId)
		{

			HasProperties = hasProperties;

		}
		/// <summary>
		/// Construct a IfcPropertySet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertySet(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcProperty> hasProperties):base(globalId,ownerHistory,name,description)
		{

			HasProperties = hasProperties;

		}
		public static new IfcPropertySet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertySet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(HasProperties != null ? HasProperties.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
