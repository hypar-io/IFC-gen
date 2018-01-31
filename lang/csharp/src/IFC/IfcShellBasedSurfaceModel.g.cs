

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshellbasedsurfacemodel.htm"/>
	/// </summary>
	public  partial class IfcShellBasedSurfaceModel : IfcGeometricRepresentationItem
	{
		public List<IfcShell> SbsmBoundary{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcShellBasedSurfaceModel with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcShellBasedSurfaceModel(List<IfcShell> sbsmBoundary):base()
		{

			SbsmBoundary = sbsmBoundary;

		}
		public static new IfcShellBasedSurfaceModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcShellBasedSurfaceModel>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(SbsmBoundary != null ? SbsmBoundary.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
