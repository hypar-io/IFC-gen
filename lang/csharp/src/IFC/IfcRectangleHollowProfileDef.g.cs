

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectanglehollowprofiledef.htm"/>
	/// </summary>
	public  partial class IfcRectangleHollowProfileDef : IfcRectangleProfileDef
	{
		public IfcPositiveLengthMeasure WallThickness{get;set;} 
		public IfcNonNegativeLengthMeasure InnerFilletRadius{get;set;} // optional
		public IfcNonNegativeLengthMeasure OuterFilletRadius{get;set;} // optional


		/// <summary>
		/// Construct a IfcRectangleHollowProfileDef with all required attributes.
		/// </summary>
		public IfcRectangleHollowProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim,IfcPositiveLengthMeasure wallThickness):base(profileType,xDim,yDim)
		{

			WallThickness = wallThickness;

		}
		/// <summary>
		/// Construct a IfcRectangleHollowProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRectangleHollowProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim,IfcPositiveLengthMeasure wallThickness,IfcNonNegativeLengthMeasure innerFilletRadius,IfcNonNegativeLengthMeasure outerFilletRadius):base(profileType,profileName,position,xDim,yDim)
		{

			WallThickness = wallThickness;
			InnerFilletRadius = innerFilletRadius;
			OuterFilletRadius = outerFilletRadius;

		}
		public static new IfcRectangleHollowProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRectangleHollowProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(XDim != null ? XDim.ToStepValue() : "$");
			parameters.Add(YDim != null ? YDim.ToStepValue() : "$");
			parameters.Add(WallThickness != null ? WallThickness.ToStepValue() : "$");
			parameters.Add(InnerFilletRadius != null ? InnerFilletRadius.ToStepValue() : "$");
			parameters.Add(OuterFilletRadius != null ? OuterFilletRadius.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
