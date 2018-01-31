

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm"/>
	/// </summary>
	public  partial class IfcVertexPoint : IfcVertex
	{
		public IfcPoint VertexGeometry{get;set;} 


		/// <summary>
		/// Construct a IfcVertexPoint with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcVertexPoint(IfcPoint vertexGeometry):base()
		{

			VertexGeometry = vertexGeometry;

		}
		public static new IfcVertexPoint FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVertexPoint>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(VertexGeometry != null ? VertexGeometry.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
