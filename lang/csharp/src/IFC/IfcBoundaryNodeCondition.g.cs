

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodecondition.htm"/>
	/// </summary>
	public  partial class IfcBoundaryNodeCondition : IfcBoundaryCondition
	{
		public IfcTranslationalStiffnessSelect TranslationalStiffnessX{get;set;} // optional
		public IfcTranslationalStiffnessSelect TranslationalStiffnessY{get;set;} // optional
		public IfcTranslationalStiffnessSelect TranslationalStiffnessZ{get;set;} // optional
		public IfcRotationalStiffnessSelect RotationalStiffnessX{get;set;} // optional
		public IfcRotationalStiffnessSelect RotationalStiffnessY{get;set;} // optional
		public IfcRotationalStiffnessSelect RotationalStiffnessZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcBoundaryNodeCondition with all required attributes.
		/// </summary>
		public IfcBoundaryNodeCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcBoundaryNodeCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundaryNodeCondition(IfcLabel name,IfcTranslationalStiffnessSelect translationalStiffnessX,IfcTranslationalStiffnessSelect translationalStiffnessY,IfcTranslationalStiffnessSelect translationalStiffnessZ,IfcRotationalStiffnessSelect rotationalStiffnessX,IfcRotationalStiffnessSelect rotationalStiffnessY,IfcRotationalStiffnessSelect rotationalStiffnessZ):base(name)
		{

			TranslationalStiffnessX = translationalStiffnessX;
			TranslationalStiffnessY = translationalStiffnessY;
			TranslationalStiffnessZ = translationalStiffnessZ;
			RotationalStiffnessX = rotationalStiffnessX;
			RotationalStiffnessY = rotationalStiffnessY;
			RotationalStiffnessZ = rotationalStiffnessZ;

		}
		public static new IfcBoundaryNodeCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundaryNodeCondition>(json); }

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

            return string.Join(", ", parameters.ToArray());
        }
	}
}
