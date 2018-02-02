

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyleassignment.htm"/>
	/// </summary>
	public  partial class IfcPresentationStyleAssignment : BaseIfc
	{
		public List<IfcPresentationStyleSelect> Styles{get;set;} 


		/// <summary>
		/// Construct a IfcPresentationStyleAssignment with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPresentationStyleAssignment(List<IfcPresentationStyleSelect> styles):base()
		{

			Styles = styles;

		}
		public static  IfcPresentationStyleAssignment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPresentationStyleAssignment>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Styles != null ? Styles.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
