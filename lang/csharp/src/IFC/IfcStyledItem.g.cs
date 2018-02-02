

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyleditem.htm"/>
	/// </summary>
	public  partial class IfcStyledItem : IfcRepresentationItem
	{
		public IfcRepresentationItem Item{get;set;} // optional
		public List<IfcStyleAssignmentSelect> Styles{get;set;} 
		public IfcLabel Name{get;set;} // optional


		/// <summary>
		/// Construct a IfcStyledItem with all required attributes.
		/// </summary>
		public IfcStyledItem(List<IfcStyleAssignmentSelect> styles):base()
		{

			Styles = styles;

		}
		/// <summary>
		/// Construct a IfcStyledItem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStyledItem(IfcRepresentationItem item,List<IfcStyleAssignmentSelect> styles,IfcLabel name):base()
		{

			Item = item;
			Styles = styles;
			Name = name;

		}
		public static new IfcStyledItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStyledItem>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Item != null ? Item.ToStepValue() : "$");
			parameters.Add(Styles != null ? Styles.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
