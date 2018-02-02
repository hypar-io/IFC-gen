

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshaperepresentation.htm"/>
	/// </summary>
	public  partial class IfcShapeRepresentation : IfcShapeModel
	{


		/// <summary>
		/// Construct a IfcShapeRepresentation with all required attributes.
		/// </summary>
		public IfcShapeRepresentation(IfcRepresentationContext contextOfItems,List<IfcRepresentationItem> items):base(contextOfItems,items)
		{


		}
		/// <summary>
		/// Construct a IfcShapeRepresentation with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcShapeRepresentation(IfcRepresentationContext contextOfItems,IfcLabel representationIdentifier,IfcLabel representationType,List<IfcRepresentationItem> items):base(contextOfItems,representationIdentifier,representationType,items)
		{


		}
		public static new IfcShapeRepresentation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcShapeRepresentation>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ContextOfItems != null ? ContextOfItems.ToStepValue() : "$");
			parameters.Add(RepresentationIdentifier != null ? RepresentationIdentifier.ToStepValue() : "$");
			parameters.Add(RepresentationType != null ? RepresentationType.ToStepValue() : "$");
			parameters.Add(Items != null ? Items.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
