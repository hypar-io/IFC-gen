

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointgeometry.htm"/>
	/// </summary>
	public  partial class IfcConnectionPointGeometry : IfcConnectionGeometry
	{
		public IfcPointOrVertexPoint PointOnRelatingElement{get;set;} 
		public IfcPointOrVertexPoint PointOnRelatedElement{get;set;} // optional


		/// <summary>
		/// Construct a IfcConnectionPointGeometry with all required attributes.
		/// </summary>
		public IfcConnectionPointGeometry(IfcPointOrVertexPoint pointOnRelatingElement):base()
		{

			PointOnRelatingElement = pointOnRelatingElement;

		}
		/// <summary>
		/// Construct a IfcConnectionPointGeometry with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectionPointGeometry(IfcPointOrVertexPoint pointOnRelatingElement,IfcPointOrVertexPoint pointOnRelatedElement):base()
		{

			PointOnRelatingElement = pointOnRelatingElement;
			PointOnRelatedElement = pointOnRelatedElement;

		}
		public static new IfcConnectionPointGeometry FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectionPointGeometry>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(PointOnRelatingElement != null ? PointOnRelatingElement.ToStepValue() : "$");
			parameters.Add(PointOnRelatedElement != null ? PointOnRelatedElement.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
