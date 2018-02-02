

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgeloop.htm"/>
	/// </summary>
	public  partial class IfcEdgeLoop : IfcLoop
	{
		public List<IfcOrientedEdge> EdgeList{get;set;} 

        [JsonIgnore]
        public IfcInteger Ne{get{throw new NotImplementedException($"Derived property logic has been implemented for Ne.");}} // derived


		/// <summary>
		/// Construct a IfcEdgeLoop with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEdgeLoop(List<IfcOrientedEdge> edgeList):base()
		{

			EdgeList = edgeList;

		}
		public static new IfcEdgeLoop FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEdgeLoop>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(EdgeList != null ? EdgeList.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
