

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurve.htm"/>
	/// </summary>
	public abstract partial class IfcBSplineCurve : IfcBoundedCurve
	{
		public IfcInteger Degree{get;set;} 
		public List<IfcCartesianPoint> ControlPointsList{get;set;} 
		public IfcBSplineCurveForm CurveForm{get;set;} 
		public IfcLogical ClosedCurve{get;set;} 
		public IfcLogical SelfIntersect{get;set;} 

        [JsonIgnore]
        public IfcInteger UpperIndexOnControlPoints{get{throw new NotImplementedException($"Derived property logic has been implemented for UpperIndexOnControlPoints.");}} // derived

        [JsonIgnore]
        public List<IfcCartesianPoint> ControlPoints{get{throw new NotImplementedException($"Derived property logic has been implemented for ControlPoints.");}} // derived


		/// <summary>
		/// Construct a IfcBSplineCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBSplineCurve(IfcInteger degree,List<IfcCartesianPoint> controlPointsList,IfcBSplineCurveForm curveForm,IfcLogical closedCurve,IfcLogical selfIntersect):base()
		{

			Degree = degree;
			ControlPointsList = controlPointsList;
			CurveForm = curveForm;
			ClosedCurve = closedCurve;
			SelfIntersect = selfIntersect;

		}
		public static new IfcBSplineCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBSplineCurve>(json); }

	}
}
