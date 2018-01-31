

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcschedulingtime.htm"/>
	/// </summary>
	public abstract partial class IfcSchedulingTime : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional
		public IfcDataOriginEnum DataOrigin{get;set;} // optional
		public IfcLabel UserDefinedDataOrigin{get;set;} // optional


		/// <summary>
		/// Construct a IfcSchedulingTime with all required attributes.
		/// </summary>
		public IfcSchedulingTime():base()
		{


		}
		/// <summary>
		/// Construct a IfcSchedulingTime with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSchedulingTime(IfcLabel name,IfcDataOriginEnum dataOrigin,IfcLabel userDefinedDataOrigin):base()
		{

			Name = name;
			DataOrigin = dataOrigin;
			UserDefinedDataOrigin = userDefinedDataOrigin;

		}
		public static  IfcSchedulingTime FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSchedulingTime>(json); }

	}
}
