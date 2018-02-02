

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctable.htm"/>
	/// </summary>
	public  partial class IfcTable : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional
		public List<IfcTableRow> Rows{get;set;} // optional
		public List<IfcTableColumn> Columns{get;set;} // optional

        [JsonIgnore]
        public IfcInteger NumberOfCellsInRow{get{throw new NotImplementedException($"Derived property logic has been implemented for NumberOfCellsInRow.");}} // derived

        [JsonIgnore]
        public IfcInteger NumberOfHeadings{get{throw new NotImplementedException($"Derived property logic has been implemented for NumberOfHeadings.");}} // derived

        [JsonIgnore]
        public IfcInteger NumberOfDataRows{get{throw new NotImplementedException($"Derived property logic has been implemented for NumberOfDataRows.");}} // derived


		/// <summary>
		/// Construct a IfcTable with all required attributes.
		/// </summary>
		public IfcTable():base()
		{
			Rows = new List<IfcTableRow>();
			Columns = new List<IfcTableColumn>();


		}
		/// <summary>
		/// Construct a IfcTable with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTable(IfcLabel name,List<IfcTableRow> rows,List<IfcTableColumn> columns):base()
		{

			Name = name;
			Rows = rows;
			Columns = columns;

		}
		public static  IfcTable FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTable>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Rows != null ? Rows.ToStepValue() : "$");
			parameters.Add(Columns != null ? Columns.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
