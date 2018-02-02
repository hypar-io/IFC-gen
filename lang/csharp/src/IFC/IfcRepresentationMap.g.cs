

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationmap.htm"/>
	/// </summary>
	public  partial class IfcRepresentationMap : BaseIfc
	{
		public IfcAxis2Placement MappingOrigin{get;set;} 
		public IfcRepresentation MappedRepresentation{get;set;} 
		public List<IfcShapeAspect> HasShapeAspects{get;set;} // inverse
		public List<IfcMappedItem> MapUsage{get;set;} // inverse


		/// <summary>
		/// Construct a IfcRepresentationMap with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRepresentationMap(IfcAxis2Placement mappingOrigin,IfcRepresentation mappedRepresentation):base()
		{
			HasShapeAspects = new List<IfcShapeAspect>();
			MapUsage = new List<IfcMappedItem>();

			MappingOrigin = mappingOrigin;
			MappedRepresentation = mappedRepresentation;

		}
		public static  IfcRepresentationMap FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRepresentationMap>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(MappingOrigin != null ? MappingOrigin.ToStepValue() : "$");
			parameters.Add(MappedRepresentation != null ? MappedRepresentation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
