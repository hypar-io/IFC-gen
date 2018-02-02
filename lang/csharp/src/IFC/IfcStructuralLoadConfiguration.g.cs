

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadconfiguration.htm"/>
	/// </summary>
	public  partial class IfcStructuralLoadConfiguration : IfcStructuralLoad
	{
		public List<IfcStructuralLoadOrResult> Values{get;set;} 
		public List<List<IfcLengthMeasure>> Locations{get;set;} // optional


		/// <summary>
		/// Construct a IfcStructuralLoadConfiguration with all required attributes.
		/// </summary>
		public IfcStructuralLoadConfiguration(List<IfcStructuralLoadOrResult> values):base()
		{
			Locations = new List<List<IfcLengthMeasure>>();

			Values = values;

		}
		/// <summary>
		/// Construct a IfcStructuralLoadConfiguration with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadConfiguration(IfcLabel name,List<IfcStructuralLoadOrResult> values,List<List<IfcLengthMeasure>> locations):base(name)
		{

			Values = values;
			Locations = locations;

		}
		public static new IfcStructuralLoadConfiguration FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadConfiguration>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Values != null ? Values.ToStepValue() : "$");
			parameters.Add(Locations != null ? Locations.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
