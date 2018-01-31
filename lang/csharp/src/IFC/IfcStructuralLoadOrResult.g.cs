

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadorresult.htm"/>
	/// </summary>
	public abstract partial class IfcStructuralLoadOrResult : IfcStructuralLoad
	{


		/// <summary>
		/// Construct a IfcStructuralLoadOrResult with all required attributes.
		/// </summary>
		public IfcStructuralLoadOrResult():base()
		{


		}
		/// <summary>
		/// Construct a IfcStructuralLoadOrResult with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStructuralLoadOrResult(IfcLabel name):base(name)
		{


		}
		public static new IfcStructuralLoadOrResult FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStructuralLoadOrResult>(json); }

	}
}
