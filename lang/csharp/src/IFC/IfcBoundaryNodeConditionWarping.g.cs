

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodeconditionwarping.htm"/>
	/// </summary>
	public  partial class IfcBoundaryNodeConditionWarping : IfcBoundaryNodeCondition
	{
		public IfcWarpingStiffnessSelect WarpingStiffness{get;set;} // optional


		/// <summary>
		/// Construct a IfcBoundaryNodeConditionWarping with all required attributes.
		/// </summary>
		public IfcBoundaryNodeConditionWarping():base()
		{


		}
		/// <summary>
		/// Construct a IfcBoundaryNodeConditionWarping with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundaryNodeConditionWarping(IfcLabel name,IfcTranslationalStiffnessSelect translationalStiffnessX,IfcTranslationalStiffnessSelect translationalStiffnessY,IfcTranslationalStiffnessSelect translationalStiffnessZ,IfcRotationalStiffnessSelect rotationalStiffnessX,IfcRotationalStiffnessSelect rotationalStiffnessY,IfcRotationalStiffnessSelect rotationalStiffnessZ,IfcWarpingStiffnessSelect warpingStiffness):base(name,translationalStiffnessX,translationalStiffnessY,translationalStiffnessZ,rotationalStiffnessX,rotationalStiffnessY,rotationalStiffnessZ)
		{

			WarpingStiffness = warpingStiffness;

		}
		public static new IfcBoundaryNodeConditionWarping FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundaryNodeConditionWarping>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessX != null ? TranslationalStiffnessX.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessY != null ? TranslationalStiffnessY.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessZ != null ? TranslationalStiffnessZ.ToStepValue() : "$");
			parameters.Add(RotationalStiffnessX != null ? RotationalStiffnessX.ToStepValue() : "$");
			parameters.Add(RotationalStiffnessY != null ? RotationalStiffnessY.ToStepValue() : "$");
			parameters.Add(RotationalStiffnessZ != null ? RotationalStiffnessZ.ToStepValue() : "$");
			parameters.Add(WarpingStiffness != null ? WarpingStiffness.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
