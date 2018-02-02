

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductdefinitionshape.htm"/>
	/// </summary>
	public  partial class IfcProductDefinitionShape : IfcProductRepresentation
	{
		public List<IfcProduct> ShapeOfProduct{get;set;} // inverse
		public List<IfcShapeAspect> HasShapeAspects{get;set;} // inverse


		/// <summary>
		/// Construct a IfcProductDefinitionShape with all required attributes.
		/// </summary>
		public IfcProductDefinitionShape(List<IfcRepresentation> representations):base(representations)
		{
			ShapeOfProduct = new List<IfcProduct>();
			HasShapeAspects = new List<IfcShapeAspect>();


		}
		/// <summary>
		/// Construct a IfcProductDefinitionShape with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProductDefinitionShape(IfcLabel name,IfcText description,List<IfcRepresentation> representations):base(name,description,representations)
		{
			ShapeOfProduct = new List<IfcProduct>();
			HasShapeAspects = new List<IfcShapeAspect>();


		}
		public static new IfcProductDefinitionShape FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProductDefinitionShape>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Representations != null ? Representations.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
