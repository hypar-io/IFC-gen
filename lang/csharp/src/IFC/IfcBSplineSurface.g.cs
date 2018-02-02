

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinesurface.htm"/>
	/// </summary>
	public abstract partial class IfcBSplineSurface : IfcBoundedSurface
	{
		public IfcInteger UDegree{get;set;} 
		public IfcInteger VDegree{get;set;} 
		public List<List<IfcCartesianPoint>> ControlPointsList{get;set;} 
		public IfcBSplineSurfaceForm SurfaceForm{get;set;} 
		public IfcLogical UClosed{get;set;} 
		public IfcLogical VClosed{get;set;} 
		public IfcLogical SelfIntersect{get;set;} 

        [JsonIgnore]
        public IfcInteger UUpper{get{throw new NotImplementedException($"Derived property logic has been implemented for UUpper.");}} // derived

        [JsonIgnore]
        public IfcInteger VUpper{get{throw new NotImplementedException($"Derived property logic has been implemented for VUpper.");}} // derived

        [JsonIgnore]
        public List<List<IfcCartesianPoint>> ControlPoints{get{throw new NotImplementedException($"Derived property logic has been implemented for ControlPoints.");}} // derived


		/// <summary>
		/// Construct a IfcBSplineSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBSplineSurface(IfcInteger uDegree,IfcInteger vDegree,List<List<IfcCartesianPoint>> controlPointsList,IfcBSplineSurfaceForm surfaceForm,IfcLogical uClosed,IfcLogical vClosed,IfcLogical selfIntersect):base()
		{

			UDegree = uDegree;
			VDegree = vDegree;
			ControlPointsList = controlPointsList;
			SurfaceForm = surfaceForm;
			UClosed = uClosed;
			VClosed = vClosed;
			SelfIntersect = selfIntersect;

		}
		public static new IfcBSplineSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBSplineSurface>(json); }

	}
}
