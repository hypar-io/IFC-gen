

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebasedsurfacemodel.htm"/>
	/// </summary>
	public  partial class IfcFaceBasedSurfaceModel : IfcGeometricRepresentationItem
	{
		public List<IfcConnectedFaceSet> FbsmFaces{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcFaceBasedSurfaceModel with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFaceBasedSurfaceModel(List<IfcConnectedFaceSet> fbsmFaces):base()
		{

			FbsmFaces = fbsmFaces;

		}
		public static new IfcFaceBasedSurfaceModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFaceBasedSurfaceModel>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(FbsmFaces != null ? FbsmFaces.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
