

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfeatureelementsubtraction.htm"/>
	/// </summary>
	public abstract partial class IfcFeatureElementSubtraction : IfcFeatureElement
	{
		public IfcRelVoidsElement VoidsElements{get;set;} // inverse


		/// <summary>
		/// Construct a IfcFeatureElementSubtraction with all required attributes.
		/// </summary>
		public IfcFeatureElementSubtraction(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcFeatureElementSubtraction with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFeatureElementSubtraction(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcObjectPlacement objectPlacement,IfcProductRepresentation representation,IfcIdentifier tag):base(globalId,ownerHistory,name,description,objectType,objectPlacement,representation,tag)
		{


		}
		public static new IfcFeatureElementSubtraction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFeatureElementSubtraction>(json); }

	}
}
