

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallist.htm"/>
	/// </summary>
	public  partial class IfcMaterialList : BaseIfc
	{
		public List<IfcMaterial> Materials{get;set;} 


		/// <summary>
		/// Construct a IfcMaterialList with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialList(List<IfcMaterial> materials):base()
		{

			Materials = materials;

		}
		public static  IfcMaterialList FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialList>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Materials != null ? Materials.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
