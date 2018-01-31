

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvector.htm"/>
	/// </summary>
	public  partial class IfcVector : IfcGeometricRepresentationItem
	{
		public IfcDirection Orientation{get;set;} 
		public IfcLengthMeasure Magnitude{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcVector with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcVector(IfcDirection orientation,IfcLengthMeasure magnitude):base()
		{

			Orientation = orientation;
			Magnitude = magnitude;

		}
		public static new IfcVector FromJSON(string json){ return JsonConvert.DeserializeObject<IfcVector>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Orientation != null ? Orientation.ToStepValue() : "$");
			parameters.Add(Magnitude != null ? Magnitude.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
