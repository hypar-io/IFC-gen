

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcnamedunit.htm"/>
	/// </summary>
	public abstract partial class IfcNamedUnit : BaseIfc
	{
		public IfcDimensionalExponents Dimensions{get;set;} 
		public IfcUnitEnum UnitType{get;set;} 


		/// <summary>
		/// Construct a IfcNamedUnit with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcNamedUnit(IfcDimensionalExponents dimensions,IfcUnitEnum unitType):base()
		{

			Dimensions = dimensions;
			UnitType = unitType;

		}
		public static  IfcNamedUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcNamedUnit>(json); }

	}
}
