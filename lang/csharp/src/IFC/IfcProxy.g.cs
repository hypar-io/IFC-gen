

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproxy.htm"/>
	/// </summary>
	public  partial class IfcProxy : IfcProduct
	{
		public IfcObjectTypeEnum ProxyType{get;set;} 
		public IfcLabel Tag{get;set;} // optional


		/// <summary>
		/// Construct a IfcProxy with all required attributes.
		/// </summary>
		public IfcProxy(IfcGloballyUniqueId globalId,IfcObjectTypeEnum proxyType):base(globalId)
		{

			ProxyType = proxyType;

		}
		/// <summary>
		/// Construct a IfcProxy with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProxy(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcObjectTypeEnum proxyType,IfcLabel tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation)
		{

			ProxyType = proxyType;
			Tag = tag;

		}
		public static new IfcProxy FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProxy>(json); }

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
			parameters.Add(ProxyType.ToStepValue());
			parameters.Add(Tag != null ? Tag.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
