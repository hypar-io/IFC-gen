

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalinformation.htm"/>
	/// </summary>
	public abstract partial class IfcExternalInformation : BaseIfc
	{


		/// <summary>
		/// Construct a IfcExternalInformation with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternalInformation():base()
		{


		}
		public static  IfcExternalInformation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternalInformation>(json); }

	}
}
