

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientededge.htm"/>
	/// </summary>
	public  partial class IfcOrientedEdge : IfcEdge
	{
		public IfcEdge EdgeElement{get;set;} 
		public IfcBoolean Orientation{get;set;} 

        [JsonIgnore]
        new public IfcVertex EdgeStart{get{throw new NotImplementedException($"Derived property logic has been implemented for EdgeStart.");}} // derived

        [JsonIgnore]
        new public IfcVertex EdgeEnd{get{throw new NotImplementedException($"Derived property logic has been implemented for EdgeEnd.");}} // derived


		/// <summary>
		/// Construct a IfcOrientedEdge with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOrientedEdge(IfcVertex edgeStart,IfcVertex edgeEnd,IfcEdge edgeElement,IfcBoolean orientation):base(edgeStart,edgeEnd)
		{

			EdgeElement = edgeElement;
			Orientation = orientation;

		}
		public static new IfcOrientedEdge FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOrientedEdge>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add("*");
			parameters.Add("*");
			parameters.Add(EdgeElement != null ? EdgeElement.ToStepValue() : "$");
			parameters.Add(Orientation != null ? Orientation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
