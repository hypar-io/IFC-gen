

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmonetaryunit.htm"/>
	/// </summary>
	public  partial class IfcMonetaryUnit : BaseIfc
	{
		public IfcLabel Currency{get;set;} 


		/// <summary>
		/// Construct a IfcMonetaryUnit with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMonetaryUnit(IfcLabel currency):base()
		{

			Currency = currency;

		}
		public static  IfcMonetaryUnit FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMonetaryUnit>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Currency != null ? Currency.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
