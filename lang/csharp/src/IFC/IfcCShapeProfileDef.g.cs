

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccshapeprofiledef.htm"/>
	/// </summary>
	public  partial class IfcCShapeProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure Depth{get;set;} 
		public IfcPositiveLengthMeasure Width{get;set;} 
		public IfcPositiveLengthMeasure WallThickness{get;set;} 
		public IfcPositiveLengthMeasure Girth{get;set;} 
		public IfcNonNegativeLengthMeasure InternalFilletRadius{get;set;} // optional


		/// <summary>
		/// Construct a IfcCShapeProfileDef with all required attributes.
		/// </summary>
		public IfcCShapeProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure depth,IfcPositiveLengthMeasure width,IfcPositiveLengthMeasure wallThickness,IfcPositiveLengthMeasure girth):base(profileType)
		{

			Depth = depth;
			Width = width;
			WallThickness = wallThickness;
			Girth = girth;

		}
		/// <summary>
		/// Construct a IfcCShapeProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCShapeProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure depth,IfcPositiveLengthMeasure width,IfcPositiveLengthMeasure wallThickness,IfcPositiveLengthMeasure girth,IfcNonNegativeLengthMeasure internalFilletRadius):base(profileType,profileName,position)
		{

			Depth = depth;
			Width = width;
			WallThickness = wallThickness;
			Girth = girth;
			InternalFilletRadius = internalFilletRadius;

		}
		public static new IfcCShapeProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCShapeProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(Depth != null ? Depth.ToStepValue() : "$");
			parameters.Add(Width != null ? Width.ToStepValue() : "$");
			parameters.Add(WallThickness != null ? WallThickness.ToStepValue() : "$");
			parameters.Add(Girth != null ? Girth.ToStepValue() : "$");
			parameters.Add(InternalFilletRadius != null ? InternalFilletRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
