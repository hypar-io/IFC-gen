

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangleprofiledef.htm"/>
	/// </summary>
	public  partial class IfcRectangleProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure XDim{get;set;} 
		public IfcPositiveLengthMeasure YDim{get;set;} 


		/// <summary>
		/// Construct a IfcRectangleProfileDef with all required attributes.
		/// </summary>
		public IfcRectangleProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim):base(profileType)
		{

			XDim = xDim;
			YDim = yDim;

		}
		/// <summary>
		/// Construct a IfcRectangleProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRectangleProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim):base(profileType,profileName,position)
		{

			XDim = xDim;
			YDim = yDim;

		}
		public static new IfcRectangleProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRectangleProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(XDim != null ? XDim.ToStepValue() : "$");
			parameters.Add(YDim != null ? YDim.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
