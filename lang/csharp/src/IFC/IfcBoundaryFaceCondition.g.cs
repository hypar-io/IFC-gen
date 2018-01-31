

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryfacecondition.htm"/>
	/// </summary>
	public  partial class IfcBoundaryFaceCondition : IfcBoundaryCondition
	{
		public IfcModulusOfSubgradeReactionSelect TranslationalStiffnessByAreaX{get;set;} // optional
		public IfcModulusOfSubgradeReactionSelect TranslationalStiffnessByAreaY{get;set;} // optional
		public IfcModulusOfSubgradeReactionSelect TranslationalStiffnessByAreaZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcBoundaryFaceCondition with all required attributes.
		/// </summary>
		public IfcBoundaryFaceCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcBoundaryFaceCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundaryFaceCondition(IfcLabel name,IfcModulusOfSubgradeReactionSelect translationalStiffnessByAreaX,IfcModulusOfSubgradeReactionSelect translationalStiffnessByAreaY,IfcModulusOfSubgradeReactionSelect translationalStiffnessByAreaZ):base(name)
		{

			TranslationalStiffnessByAreaX = translationalStiffnessByAreaX;
			TranslationalStiffnessByAreaY = translationalStiffnessByAreaY;
			TranslationalStiffnessByAreaZ = translationalStiffnessByAreaZ;

		}
		public static new IfcBoundaryFaceCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundaryFaceCondition>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessByAreaX != null ? TranslationalStiffnessByAreaX.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessByAreaY != null ? TranslationalStiffnessByAreaY.ToStepValue() : "$");
			parameters.Add(TranslationalStiffnessByAreaZ != null ? TranslationalStiffnessByAreaZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
