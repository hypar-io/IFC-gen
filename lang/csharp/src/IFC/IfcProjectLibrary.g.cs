

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectlibrary.htm"/>
	/// </summary>
	public  partial class IfcProjectLibrary : IfcContext
	{


		/// <summary>
		/// Construct a IfcProjectLibrary with all required attributes.
		/// </summary>
		public IfcProjectLibrary(IfcGloballyUniqueId globalId):base(globalId)
		{


		}
		/// <summary>
		/// Construct a IfcProjectLibrary with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProjectLibrary(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLabel longName,IfcLabel phase,List<IfcRepresentationContext> representationContexts,IfcUnitAssignment unitsInContext):base(globalId,ownerHistory,name,description,objectType,longName,phase,representationContexts,unitsInContext)
		{


		}
		public static new IfcProjectLibrary FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProjectLibrary>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(LongName != null ? LongName.ToStepValue() : "$");
			parameters.Add(Phase != null ? Phase.ToStepValue() : "$");
			parameters.Add(RepresentationContexts != null ? RepresentationContexts.ToStepValue() : "$");
			parameters.Add(UnitsInContext != null ? UnitsInContext.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
