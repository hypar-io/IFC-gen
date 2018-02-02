

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctablerow.htm"/>
	/// </summary>
	public  partial class IfcTableRow : BaseIfc
	{
		public List<IfcValue> RowCells{get;set;} // optional
		public IfcBoolean IsHeading{get;set;} // optional


		/// <summary>
		/// Construct a IfcTableRow with all required attributes.
		/// </summary>
		public IfcTableRow():base()
		{
			RowCells = new List<IfcValue>();


		}
		/// <summary>
		/// Construct a IfcTableRow with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTableRow(List<IfcValue> rowCells,IfcBoolean isHeading):base()
		{

			RowCells = rowCells;
			IsHeading = isHeading;

		}
		public static  IfcTableRow FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTableRow>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(RowCells != null ? RowCells.ToStepValue() : "$");
			parameters.Add(IsHeading != null ? IsHeading.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
