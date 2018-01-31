

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdirection.htm"/>
	/// </summary>
	public  partial class IfcDirection : IfcGeometricRepresentationItem
	{
		public List<IfcReal> DirectionRatios{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcDirection with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcDirection(List<IfcReal> directionRatios):base()
		{

			DirectionRatios = directionRatios;

		}
		public static new IfcDirection FromJSON(string json){ return JsonConvert.DeserializeObject<IfcDirection>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(DirectionRatios != null ? DirectionRatios.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
