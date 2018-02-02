

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteral.htm"/>
	/// </summary>
	public  partial class IfcTextLiteral : IfcGeometricRepresentationItem
	{
		public IfcPresentableText Literal{get;set;} 
		public IfcAxis2Placement Placement{get;set;} 
		public IfcTextPath Path{get;set;} 


		/// <summary>
		/// Construct a IfcTextLiteral with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTextLiteral(IfcPresentableText literal,IfcAxis2Placement placement,IfcTextPath path):base()
		{

			Literal = literal;
			Placement = placement;
			Path = path;

		}
		public static new IfcTextLiteral FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTextLiteral>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Literal != null ? Literal.ToStepValue() : "$");
			parameters.Add(Placement != null ? Placement.ToStepValue() : "$");
			parameters.Add(Path != null ? Path.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
