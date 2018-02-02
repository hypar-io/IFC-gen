

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm"/>
	/// </summary>
	public  partial class IfcTextLiteralWithExtent : IfcTextLiteral
	{
		public IfcPlanarExtent Extent{get;set;} 
		public IfcBoxAlignment BoxAlignment{get;set;} 


		/// <summary>
		/// Construct a IfcTextLiteralWithExtent with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextLiteralWithExtent(IfcPresentableText literal,IfcAxis2Placement placement,IfcTextPath path,IfcPlanarExtent extent,IfcBoxAlignment boxAlignment):base(literal,placement,path)
		{

			Extent = extent;
			BoxAlignment = boxAlignment;

		}
		public static new IfcTextLiteralWithExtent FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextLiteralWithExtent>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Literal != null ? Literal.ToStepValue() : "$");
			parameters.Add(Placement != null ? Placement.ToStepValue() : "$");
			parameters.Add(Path != null ? Path.ToStepValue() : "$");
			parameters.Add(Extent != null ? Extent.ToStepValue() : "$");
			parameters.Add(BoxAlignment != null ? BoxAlignment.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
