

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacementdistortion.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadSingleDisplacementDistortion : IfcStructuralLoadSingleDisplacement
	{
		public IfcCurvatureMeasure Distortion{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadSingleDisplacementDistortion with all required attributes.
		/// </summary>
		public IfcStructuralLoadSingleDisplacementDistortion():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadSingleDisplacementDistortion with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadSingleDisplacementDistortion(IfcLabel name,IfcLengthMeasure displacementX,IfcLengthMeasure displacementY,IfcLengthMeasure displacementZ,IfcPlaneAngleMeasure rotationalDisplacementRX,IfcPlaneAngleMeasure rotationalDisplacementRY,IfcPlaneAngleMeasure rotationalDisplacementRZ,IfcCurvatureMeasure distortion):base(name,displacementX,displacementY,displacementZ,rotationalDisplacementRX,rotationalDisplacementRY,rotationalDisplacementRZ)
		{

			Distortion = distortion;

		}
		public static new IfcStructuralLoadSingleDisplacementDistortion FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadSingleDisplacementDistortion>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(DisplacementX != null ? DisplacementX.ToStepValue() : "$");
			parameters.Add(DisplacementY != null ? DisplacementY.ToStepValue() : "$");
			parameters.Add(DisplacementZ != null ? DisplacementZ.ToStepValue() : "$");
			parameters.Add(RotationalDisplacementRX != null ? RotationalDisplacementRX.ToStepValue() : "$");
			parameters.Add(RotationalDisplacementRY != null ? RotationalDisplacementRY.ToStepValue() : "$");
			parameters.Add(RotationalDisplacementRZ != null ? RotationalDisplacementRZ.ToStepValue() : "$");
			parameters.Add(Distortion != null ? Distortion.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
