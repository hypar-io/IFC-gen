

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinition.htm"/>
	/// </summary>
	public abstract partial class IfcMaterialDefinition : BaseIfc
	{
		public List<IfcRelAssociatesMaterial> AssociatedTo{get;set;} // inverse
		public List<IfcExternalReferenceRelationship> HasExternalReferences{get;set;} // inverse
		public List<IfcMaterialProperties> HasProperties{get;set;} // inverse


		/// <summary>
		/// Construct a IfcMaterialDefinition with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialDefinition():base()
		{
			AssociatedTo = new List<IfcRelAssociatesMaterial>();
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			HasProperties = new List<IfcMaterialProperties>();


		}
		public static  IfcMaterialDefinition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialDefinition>(json); }

	}
}
