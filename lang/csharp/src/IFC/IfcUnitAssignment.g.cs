

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcunitassignment.htm"/>
	/// </summary>
	public  partial class IfcUnitAssignment : BaseIfc
	{
		public List<IfcUnit> Units{get;set;} 


		/// <summary>
		/// Construct a IfcUnitAssignment with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcUnitAssignment(List<IfcUnit> units):base()
		{

			Units = units;

		}
		public static  IfcUnitAssignment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcUnitAssignment>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Units != null ? Units.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
