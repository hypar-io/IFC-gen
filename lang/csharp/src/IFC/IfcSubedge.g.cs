

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubedge.htm"/>
	/// </summary>
	public  partial class IfcSubedge : IfcEdge
	{
		public IfcEdge ParentEdge{get;set;} 


		/// <summary>
		/// Construct a IfcSubedge with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSubedge(IfcVertex edgeStart,IfcVertex edgeEnd,IfcEdge parentEdge):base(edgeStart,edgeEnd)
		{

			ParentEdge = parentEdge;

		}
		public static new IfcSubedge FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSubedge>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(EdgeStart != null ? EdgeStart.ToStepValue() : "$");
			parameters.Add(EdgeEnd != null ? EdgeEnd.ToStepValue() : "$");
			parameters.Add(ParentEdge != null ? ParentEdge.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
