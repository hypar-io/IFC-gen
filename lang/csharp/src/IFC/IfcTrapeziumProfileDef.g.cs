

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrapeziumprofiledef.htm"/>
	/// </summary>
	public  partial class IfcTrapeziumProfileDef : IfcParameterizedProfileDef
	{
		public IfcPositiveLengthMeasure BottomXDim{get;set;} 
		public IfcPositiveLengthMeasure TopXDim{get;set;} 
		public IfcPositiveLengthMeasure YDim{get;set;} 
		public IfcLengthMeasure TopXOffset{get;set;} 


		/// <summary>
		/// Construct a IfcTrapeziumProfileDef with all required attributes.
		/// </summary>
		public IfcTrapeziumProfileDef(IfcProfileTypeEnum profileType,IfcPositiveLengthMeasure bottomXDim,IfcPositiveLengthMeasure topXDim,IfcPositiveLengthMeasure yDim,IfcLengthMeasure topXOffset):base(profileType)
		{

			BottomXDim = bottomXDim;
			TopXDim = topXDim;
			YDim = yDim;
			TopXOffset = topXOffset;

		}
		/// <summary>
		/// Construct a IfcTrapeziumProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTrapeziumProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position,IfcPositiveLengthMeasure bottomXDim,IfcPositiveLengthMeasure topXDim,IfcPositiveLengthMeasure yDim,IfcLengthMeasure topXOffset):base(profileType,profileName,position)
		{

			BottomXDim = bottomXDim;
			TopXDim = topXDim;
			YDim = yDim;
			TopXOffset = topXOffset;

		}
		public static new IfcTrapeziumProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTrapeziumProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(BottomXDim != null ? BottomXDim.ToStepValue() : "$");
			parameters.Add(TopXDim != null ? TopXDim.ToStepValue() : "$");
			parameters.Add(YDim != null ? YDim.ToStepValue() : "$");
			parameters.Add(TopXOffset != null ? TopXOffset.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
