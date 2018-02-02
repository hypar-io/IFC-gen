

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcparameterizedprofiledef.htm"/>
	/// </summary>
	public abstract partial class IfcParameterizedProfileDef : IfcProfileDef
	{
		public IfcAxis2Placement2D Position{get;set;} // optional


		/// <summary>
		/// Construct a IfcParameterizedProfileDef with all required attributes.
		/// </summary>
		public IfcParameterizedProfileDef(IfcProfileTypeEnum profileType):base(profileType)
		{


		}
		/// <summary>
		/// Construct a IfcParameterizedProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcParameterizedProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName,IfcAxis2Placement2D position):base(profileType,profileName)
		{

			Position = position;

		}
		public static new IfcParameterizedProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcParameterizedProfileDef>(json); }

	}
}
