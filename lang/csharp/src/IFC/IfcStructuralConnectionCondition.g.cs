

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralconnectioncondition.htm"/>
	/// </summary>
	public abstract partial class IfcStructuralConnectionCondition : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralConnectionCondition with all required attributes.
		/// </summary>
		public IfcStructuralConnectionCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralConnectionCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralConnectionCondition(IfcLabel name):base()
		{

			Name = name;

		}
		public static  IfcStructuralConnectionCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralConnectionCondition>(json); }

	}
}
