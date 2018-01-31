

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarycondition.htm"/>
	/// </summary>
	public abstract partial class IfcBoundaryCondition : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional


		/// <summary>
		/// Construct a IfcBoundaryCondition with all required attributes.
		/// </summary>
		public IfcBoundaryCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcBoundaryCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundaryCondition(IfcLabel name):base()
		{

			Name = name;

		}
		public static  IfcBoundaryCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundaryCondition>(json); }

	}
}
