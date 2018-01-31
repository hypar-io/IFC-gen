

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionedspine.htm"/>
	/// </summary>
	public  partial class IfcSectionedSpine : IfcGeometricRepresentationItem
	{
		public IfcCompositeCurve SpineCurve{get;set;} 
		public List<IfcProfileDef> CrossSections{get;set;} 
		public List<IfcAxis2Placement3D> CrossSectionPositions{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcSectionedSpine with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSectionedSpine(IfcCompositeCurve spineCurve,List<IfcProfileDef> crossSections,List<IfcAxis2Placement3D> crossSectionPositions):base()
		{

			SpineCurve = spineCurve;
			CrossSections = crossSections;
			CrossSectionPositions = crossSectionPositions;

		}
		public static new IfcSectionedSpine FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSectionedSpine>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SpineCurve != null ? SpineCurve.ToStepValue() : "$");
			parameters.Add(CrossSections != null ? CrossSections.ToStepValue() : "$");
			parameters.Add(CrossSectionPositions != null ? CrossSectionPositions.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
