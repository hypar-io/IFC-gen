

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialusagedefinition.htm"/>
	/// </summary>
	public abstract partial class IfcMaterialUsageDefinition : BaseIfc
	{
		public List<IfcRelAssociatesMaterial> AssociatedTo{get;set;} // inverse


		/// <summary>
		/// Construct a IfcMaterialUsageDefinition with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialUsageDefinition():base()
		{
			AssociatedTo = new List<IfcRelAssociatesMaterial>();


		}
		public static  IfcMaterialUsageDefinition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialUsageDefinition>(json); }

	}
}
