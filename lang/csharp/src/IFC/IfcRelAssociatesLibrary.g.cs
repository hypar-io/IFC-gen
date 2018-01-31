

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociateslibrary.htm"/>
	/// </summary>
	public  partial class IfcRelAssociatesLibrary : IfcRelAssociates
	{
		public IfcLibrarySelect RelatingLibrary{get;set;} 


		/// <summary>
		/// Construct a IfcRelAssociatesLibrary with all required attributes.
		/// </summary>
		public IfcRelAssociatesLibrary(IfcGloballyUniqueId globalId,List<IfcDefinitionSelect> relatedObjects,IfcLibrarySelect relatingLibrary):base(globalId,relatedObjects)
		{

			RelatingLibrary = relatingLibrary;

		}
		/// <summary>
		/// Construct a IfcRelAssociatesLibrary with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelAssociatesLibrary(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,List<IfcDefinitionSelect> relatedObjects,IfcLibrarySelect relatingLibrary):base(globalId,ownerHistory,name,description,relatedObjects)
		{

			RelatingLibrary = relatingLibrary;

		}
		public static new IfcRelAssociatesLibrary FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelAssociatesLibrary>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatedObjects != null ? RelatedObjects.ToStepValue() : "$");
			parameters.Add(RelatingLibrary != null ? RelatingLibrary.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
