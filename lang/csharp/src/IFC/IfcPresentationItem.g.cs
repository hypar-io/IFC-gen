

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationitem.htm"/>
	/// </summary>
	public abstract partial class IfcPresentationItem : BaseIfc
	{


		/// <summary>
		/// Construct a IfcPresentationItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPresentationItem():base()
		{


		}
		public static  IfcPresentationItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPresentationItem>(json); }

	}
}
