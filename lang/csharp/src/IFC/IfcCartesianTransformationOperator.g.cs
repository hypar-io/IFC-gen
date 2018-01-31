

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesiantransformationoperator.htm"/>
	/// </summary>
	public abstract partial class IfcCartesianTransformationOperator : IfcGeometricRepresentationItem
	{
		public IfcDirection Axis1{get;set;} // optional
		public IfcDirection Axis2{get;set;} // optional
		public IfcCartesianPoint LocalOrigin{get;set;} 
		public IfcReal Scale{get;set;} // optional

        [JsonIgnore]
        public IfcReal Scl{get{throw new NotImplementedException($"Derived property logic has been implemented for Scl.");}} // derived

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcCartesianTransformationOperator with all required attributes.
		/// </summary>
		public IfcCartesianTransformationOperator(IfcCartesianPoint localOrigin):base()
		{

			LocalOrigin = localOrigin;

		}
		/// <summary>
		/// Construct a IfcCartesianTransformationOperator with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCartesianTransformationOperator(IfcDirection axis1,IfcDirection axis2,IfcCartesianPoint localOrigin,IfcReal scale):base()
		{

			Axis1 = axis1;
			Axis2 = axis2;
			LocalOrigin = localOrigin;
			Scale = scale;

		}
		public static new IfcCartesianTransformationOperator FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCartesianTransformationOperator>(json); }

	}
}
