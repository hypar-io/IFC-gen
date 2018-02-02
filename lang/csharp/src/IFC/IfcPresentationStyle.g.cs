

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyle.htm"/>
	/// </summary>
	public abstract partial class IfcPresentationStyle : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional


		/// <summary>
		/// Construct a IfcPresentationStyle with all required attributes.
		/// </summary>
		public IfcPresentationStyle():base()
		{


		}
		/// <summary>
		/// Construct a IfcPresentationStyle with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPresentationStyle(IfcLabel name):base()
		{

			Name = name;

		}
		public static  IfcPresentationStyle FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPresentationStyle>(json); }

	}
}
