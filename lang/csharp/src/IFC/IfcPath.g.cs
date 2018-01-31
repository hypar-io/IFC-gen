

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpath.htm"/>
	/// </summary>
	public  partial class IfcPath : IfcTopologicalRepresentationItem
	{
		public List<IfcOrientedEdge> EdgeList{get;set;} 


		/// <summary>
		/// Construct a IfcPath with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPath(List<IfcOrientedEdge> edgeList):base()
		{

			EdgeList = edgeList;

		}
		public static new IfcPath FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPath>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(EdgeList != null ? EdgeList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
