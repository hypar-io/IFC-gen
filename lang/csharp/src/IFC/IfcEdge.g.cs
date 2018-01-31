

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedge.htm"/>
	/// </summary>
	public  partial class IfcEdge : IfcTopologicalRepresentationItem
	{
		public IfcVertex EdgeStart{get;set;} 
		public IfcVertex EdgeEnd{get;set;} 


		/// <summary>
		/// Construct a IfcEdge with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcEdge(IfcVertex edgeStart,IfcVertex edgeEnd):base()
		{

			EdgeStart = edgeStart;
			EdgeEnd = edgeEnd;

		}
		public static new IfcEdge FromJSON(string json){ return JsonConvert.DeserializeObject<IfcEdge>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(EdgeStart != null ? EdgeStart.ToStepValue() : "$");
			parameters.Add(EdgeEnd != null ? EdgeEnd.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
