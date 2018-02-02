

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccsgsolid.htm"/>
	/// </summary>
	public  partial class IfcCsgSolid : IfcSolidModel
	{
		public IfcCsgSelect TreeRootExpression{get;set;} 


		/// <summary>
		/// Construct a IfcCsgSolid with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCsgSolid(IfcCsgSelect treeRootExpression):base()
		{

			TreeRootExpression = treeRootExpression;

		}
		public static new IfcCsgSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCsgSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TreeRootExpression != null ? TreeRootExpression.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
