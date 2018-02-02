

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricset.htm"/>
	/// </summary>
	public  partial class IfcGeometricSet : IfcGeometricRepresentationItem
	{
		public List<IfcGeometricSetSelect> Elements{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcGeometricSet with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGeometricSet(List<IfcGeometricSetSelect> elements):base()
		{

			Elements = elements;

		}
		public static new IfcGeometricSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGeometricSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Elements != null ? Elements.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
