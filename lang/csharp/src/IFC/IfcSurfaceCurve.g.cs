

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacecurve.htm"/>
	/// </summary>
	public  partial class IfcSurfaceCurve : IfcCurve
	{
		public IfcCurve Curve3D{get;set;} 
		public List<IfcPcurve> AssociatedGeometry{get;set;} 
		public IfcPreferredSurfaceCurveRepresentation MasterRepresentation{get;set;} 

        [JsonIgnore]
        public List<IfcSurface> BasisSurface{get{throw new NotImplementedException($"Derived property logic has been implemented for BasisSurface.");}} // derived


		/// <summary>
		/// Construct a IfcSurfaceCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSurfaceCurve(IfcCurve curve3D,List<IfcPcurve> associatedGeometry,IfcPreferredSurfaceCurveRepresentation masterRepresentation):base()
		{

			Curve3D = curve3D;
			AssociatedGeometry = associatedGeometry;
			MasterRepresentation = masterRepresentation;

		}
		public static new IfcSurfaceCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSurfaceCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Curve3D != null ? Curve3D.ToStepValue() : "$");
			parameters.Add(AssociatedGeometry != null ? AssociatedGeometry.ToStepValue() : "$");
			parameters.Add(MasterRepresentation != null ? MasterRepresentation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
