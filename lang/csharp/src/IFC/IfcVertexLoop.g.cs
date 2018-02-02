

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm"/>
	/// </summary>
	public  partial class IfcVertexLoop : IfcLoop
	{
		public IfcVertex LoopVertex{get;set;} 


		/// <summary>
		/// Construct a IfcVertexLoop with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcVertexLoop(IfcVertex loopVertex):base()
		{

			LoopVertex = loopVertex;

		}
		public static new IfcVertexLoop FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVertexLoop>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(LoopVertex != null ? LoopVertex.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
