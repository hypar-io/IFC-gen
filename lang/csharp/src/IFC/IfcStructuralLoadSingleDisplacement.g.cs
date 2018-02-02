

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacement.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadSingleDisplacement : IfcStructuralLoadStatic
	{
		public IfcLengthMeasure DisplacementX{get;set;} // optional
		public IfcLengthMeasure DisplacementY{get;set;} // optional
		public IfcLengthMeasure DisplacementZ{get;set;} // optional
		public IfcPlaneAngleMeasure RotationalDisplacementRX{get;set;} // optional
		public IfcPlaneAngleMeasure RotationalDisplacementRY{get;set;} // optional
		public IfcPlaneAngleMeasure RotationalDisplacementRZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadSingleDisplacement with all required attributes.
		/// </summary>
		public IfcStructuralLoadSingleDisplacement():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadSingleDisplacement with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadSingleDisplacement(IfcLabel name,IfcLengthMeasure displacementX,IfcLengthMeasure displacementY,IfcLengthMeasure displacementZ,IfcPlaneAngleMeasure rotationalDisplacementRX,IfcPlaneAngleMeasure rotationalDisplacementRY,IfcPlaneAngleMeasure rotationalDisplacementRZ):base(name)
		{

			DisplacementX = displacementX;
			DisplacementY = displacementY;
			DisplacementZ = displacementZ;
			RotationalDisplacementRX = rotationalDisplacementRX;
			RotationalDisplacementRY = rotationalDisplacementRY;
			RotationalDisplacementRZ = rotationalDisplacementRZ;

		}
		public static new IfcStructuralLoadSingleDisplacement FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadSingleDisplacement>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
