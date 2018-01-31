

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptareasolid.htm"/>
	/// </summary>
	public abstract partial class IfcSweptAreaSolid : IfcSolidModel
	{
		public IfcProfileDef SweptArea{get;set;} 
		public IfcAxis2Placement3D Position{get;set;} // optional


		/// <summary>
		/// Construct a IfcSweptAreaSolid with all required attributes.
		/// </summary>
		public IfcSweptAreaSolid(IfcProfileDef sweptArea):base()
		{

			SweptArea = sweptArea;

		}
		/// <summary>
		/// Construct a IfcSweptAreaSolid with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSweptAreaSolid(IfcProfileDef sweptArea,IfcAxis2Placement3D position):base()
		{

			SweptArea = sweptArea;
			Position = position;

		}
		public static new IfcSweptAreaSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSweptAreaSolid>(json); }

	}
}
