

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpoint.htm"/>
	/// </summary>
	public  partial class IfcCartesianPoint : IfcPoint
	{
		public List<IfcLengthMeasure> Coordinates{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianPoint with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianPoint(List<IfcLengthMeasure> coordinates):base()
		{

			Coordinates = coordinates;

		}
		public static new IfcCartesianPoint FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianPoint>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Coordinates != null ? Coordinates.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
