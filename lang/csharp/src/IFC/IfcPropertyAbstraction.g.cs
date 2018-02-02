

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyabstraction.htm"/>
	/// </summary>
	public abstract partial class IfcPropertyAbstraction : BaseIfc
	{
		public List<IfcExternalReferenceRelationship> HasExternalReferences{get;set;} // inverse


		/// <summary>
		/// Construct a IfcPropertyAbstraction with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyAbstraction():base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();


		}
		public static  IfcPropertyAbstraction FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyAbstraction>(json); }

	}
}
