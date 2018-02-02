

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm"/>
	/// </summary>
	public  partial class IfcBoundaryEdgeCondition : IfcBoundaryCondition
	{
		public IfcModulusOfTranslationalSubgradeReactionSelect TranslationalStiffnessByLengthX{get;set;} // optional
		public IfcModulusOfTranslationalSubgradeReactionSelect TranslationalStiffnessByLengthY{get;set;} // optional
		public IfcModulusOfTranslationalSubgradeReactionSelect TranslationalStiffnessByLengthZ{get;set;} // optional
		public IfcModulusOfRotationalSubgradeReactionSelect RotationalStiffnessByLengthX{get;set;} // optional
		public IfcModulusOfRotationalSubgradeReactionSelect RotationalStiffnessByLengthY{get;set;} // optional
		public IfcModulusOfRotationalSubgradeReactionSelect RotationalStiffnessByLengthZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcBoundaryEdgeCondition with all required attributes.
		/// </summary>
		public IfcBoundaryEdgeCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcBoundaryEdgeCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundaryEdgeCondition(IfcLabel name,IfcModulusOfTranslationalSubgradeReactionSelect translationalStiffnessByLengthX,IfcModulusOfTranslationalSubgradeReactionSelect translationalStiffnessByLengthY,IfcModulusOfTranslationalSubgradeReactionSelect translationalStiffnessByLengthZ,IfcModulusOfRotationalSubgradeReactionSelect rotationalStiffnessByLengthX,IfcModulusOfRotationalSubgradeReactionSelect rotationalStiffnessByLengthY,IfcModulusOfRotationalSubgradeReactionSelect rotationalStiffnessByLengthZ):base(name)
		{

			TranslationalStiffnessByLengthX = translationalStiffnessByLengthX;
			TranslationalStiffnessByLengthY = translationalStiffnessByLengthY;
			TranslationalStiffnessByLengthZ = translationalStiffnessByLengthZ;
			RotationalStiffnessByLengthX = rotationalStiffnessByLengthX;
			RotationalStiffnessByLengthY = rotationalStiffnessByLengthY;
			RotationalStiffnessByLengthZ = rotationalStiffnessByLengthZ;

		}
		public static new IfcBoundaryEdgeCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundaryEdgeCondition>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessByLengthX != null ? TranslationalStiffnessByLengthX.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessByLengthY != null ? TranslationalStiffnessByLengthY.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessByLengthZ != null ? TranslationalStiffnessByLengthZ.ToStepValue() : "$");
			parameters.Add(RotationalStiffnessByLengthX != null ? RotationalStiffnessByLengthX.ToStepValue() : "$");
			parameters.Add(RotationalStiffnessByLengthY != null ? RotationalStiffnessByLengthY.ToStepValue() : "$");
			parameters.Add(RotationalStiffnessByLengthZ != null ? RotationalStiffnessByLengthZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
