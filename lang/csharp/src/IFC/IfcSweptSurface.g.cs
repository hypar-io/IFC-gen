

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptsurface.htm"/>
	/// </summary>
	public abstract partial class IfcSweptSurface : IfcSurface
	{
		public IfcProfileDef SweptCurve{get;set;} 
		public IfcAxis2Placement3D Position{get;set;} // optional


		/// <summary>
		/// Construct a IfcSweptSurface with all required attributes.
		/// </summary>
		public IfcSweptSurface(IfcProfileDef sweptCurve):base()
		{

			SweptCurve = sweptCurve;

		}
		/// <summary>
		/// Construct a IfcSweptSurface with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSweptSurface(IfcProfileDef sweptCurve,IfcAxis2Placement3D position):base()
		{

			SweptCurve = sweptCurve;
			Position = position;

		}
		public static new IfcSweptSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSweptSurface>(json); }

	}
}
