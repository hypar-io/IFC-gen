

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversspaces.htm"/>
	/// </summary>
	public  partial class IfcRelCoversSpaces : IfcRelConnects
	{
		public IfcSpace RelatingSpace{get;set;} 
		public List<IfcCovering> RelatedCoverings{get;set;} 


		/// <summary>
		/// Construct a IfcRelCoversSpaces with all required attributes.
		/// </summary>
		public IfcRelCoversSpaces(IfcGloballyUniqueId globalId,IfcSpace relatingSpace,List<IfcCovering> relatedCoverings):base(globalId)
		{

			RelatingSpace = relatingSpace;
			RelatedCoverings = relatedCoverings;

		}
		/// <summary>
		/// Construct a IfcRelCoversSpaces with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelCoversSpaces(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcSpace relatingSpace,List<IfcCovering> relatedCoverings):base(globalId,ownerHistory,name,description)
		{

			RelatingSpace = relatingSpace;
			RelatedCoverings = relatedCoverings;

		}
		public static new IfcRelCoversSpaces FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelCoversSpaces>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingSpace != null ? RelatingSpace.ToStepValue() : "$");
			parameters.Add(RelatedCoverings != null ? RelatedCoverings.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
