

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctriangulatedfaceset.htm"/>
	/// </summary>
	public  partial class IfcTriangulatedFaceSet : IfcTessellatedFaceSet
	{
		public List<List<IfcParameterValue>> Normals{get;set;} // optional
		public IfcBoolean Closed{get;set;} // optional
		public List<List<IfcPositiveInteger>> CoordIndex{get;set;} 
		public List<IfcPositiveInteger> PnIndex{get;set;} // optional

        [JsonIgnore]
        public IfcInteger NumberOfTriangles{get{throw new NotImplementedException($"Derived property logic has been implemented for NumberOfTriangles.");}} // derived


		/// <summary>
		/// Construct a IfcTriangulatedFaceSet with all required attributes.
		/// </summary>
		public IfcTriangulatedFaceSet(IfcCartesianPointList3D coordinates,List<List<IfcPositiveInteger>> coordIndex):base(coordinates)
		{
			Normals = new List<List<IfcParameterValue>>();
			PnIndex = new List<IfcPositiveInteger>();

			CoordIndex = coordIndex;

		}
		/// <summary>
		/// Construct a IfcTriangulatedFaceSet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTriangulatedFaceSet(IfcCartesianPointList3D coordinates,List<List<IfcParameterValue>> normals,IfcBoolean closed,List<List<IfcPositiveInteger>> coordIndex,List<IfcPositiveInteger> pnIndex):base(coordinates)
		{

			Normals = normals;
			Closed = closed;
			CoordIndex = coordIndex;
			PnIndex = pnIndex;

		}
		public static new IfcTriangulatedFaceSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTriangulatedFaceSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Coordinates != null ? Coordinates.ToStepValue() : "$");
			parameters.Add(Normals != null ? Normals.ToStepValue() : "$");
			parameters.Add(Closed != null ? Closed.ToStepValue() : "$");
			parameters.Add(CoordIndex != null ? CoordIndex.ToStepValue() : "$");
			parameters.Add(PnIndex != null ? PnIndex.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
