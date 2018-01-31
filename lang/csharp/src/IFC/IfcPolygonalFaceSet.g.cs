

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalfaceset.htm"/>
	/// </summary>
	public  partial class IfcPolygonalFaceSet : IfcTessellatedFaceSet
	{
		public IfcBoolean Closed{get;set;} // optional
		public List<IfcIndexedPolygonalFace> Faces{get;set;} 
		public List<IfcPositiveInteger> PnIndex{get;set;} // optional


		/// <summary>
		/// Construct a IfcPolygonalFaceSet with all required attributes.
		/// </summary>
		public IfcPolygonalFaceSet(IfcCartesianPointList3D coordinates,List<IfcIndexedPolygonalFace> faces):base(coordinates)
		{
			PnIndex = new List<IfcPositiveInteger>();

			Faces = faces;

		}
		/// <summary>
		/// Construct a IfcPolygonalFaceSet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPolygonalFaceSet(IfcCartesianPointList3D coordinates,IfcBoolean closed,List<IfcIndexedPolygonalFace> faces,List<IfcPositiveInteger> pnIndex):base(coordinates)
		{

			Closed = closed;
			Faces = faces;
			PnIndex = pnIndex;

		}
		public static new IfcPolygonalFaceSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPolygonalFaceSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Coordinates != null ? Coordinates.ToStepValue() : "$");
			parameters.Add(Closed != null ? Closed.ToStepValue() : "$");
			parameters.Add(Faces != null ? Faces.ToStepValue() : "$");
			parameters.Add(PnIndex != null ? PnIndex.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
