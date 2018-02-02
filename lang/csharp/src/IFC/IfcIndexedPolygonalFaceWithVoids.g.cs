

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcindexedpolygonalfacewithvoids.htm"/>
	/// </summary>
	public  partial class IfcIndexedPolygonalFaceWithVoids : IfcIndexedPolygonalFace
	{
		public List<List<IfcPositiveInteger>> InnerCoordIndices{get;set;} 


		/// <summary>
		/// Construct a IfcIndexedPolygonalFaceWithVoids with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcIndexedPolygonalFaceWithVoids(List<IfcPositiveInteger> coordIndex,List<List<IfcPositiveInteger>> innerCoordIndices):base(coordIndex)
		{

			InnerCoordIndices = innerCoordIndices;

		}
		public static new IfcIndexedPolygonalFaceWithVoids FromJSON(string json){ return JsonConvert.DeserializeObject<IfcIndexedPolygonalFaceWithVoids>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CoordIndex != null ? CoordIndex.ToStepValue() : "$");
			parameters.Add(InnerCoordIndices != null ? InnerCoordIndices.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
