

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapeaspect.htm"/>
	/// </summary>
	public  partial class IfcShapeAspect : BaseIfc
	{
		public List<IfcShapeModel> ShapeRepresentations{get;set;} 
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcLogical ProductDefinitional{get;set;} 
		public IfcProductRepresentationSelect PartOfProductDefinitionShape{get;set;} // optional


		/// <summary>
		/// Construct a IfcShapeAspect with all required attributes.
		/// </summary>
		public IfcShapeAspect(List<IfcShapeModel> shapeRepresentations,IfcLogical productDefinitional):base()
		{

			ShapeRepresentations = shapeRepresentations;
			ProductDefinitional = productDefinitional;

		}
		/// <summary>
		/// Construct a IfcShapeAspect with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcShapeAspect(List<IfcShapeModel> shapeRepresentations,IfcLabel name,IfcText description,IfcLogical productDefinitional,IfcProductRepresentationSelect partOfProductDefinitionShape):base()
		{

			ShapeRepresentations = shapeRepresentations;
			Name = name;
			Description = description;
			ProductDefinitional = productDefinitional;
			PartOfProductDefinitionShape = partOfProductDefinitionShape;

		}
		public static  IfcShapeAspect FromJSON(string json){ return JsonConvert.DeserializeObject<IfcShapeAspect>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ShapeRepresentations != null ? ShapeRepresentations.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ProductDefinitional != null ? ProductDefinitional.ToStepValue() : "$");
			parameters.Add(PartOfProductDefinitionShape != null ? PartOfProductDefinitionShape.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
