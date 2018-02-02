

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialclassificationrelationship.htm"/>
	/// </summary>
	public  partial class IfcMaterialClassificationRelationship : BaseIfc
	{
		public List<IfcClassificationSelect> MaterialClassifications{get;set;} 
		public IfcMaterial ClassifiedMaterial{get;set;} 


		/// <summary>
		/// Construct a IfcMaterialClassificationRelationship with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialClassificationRelationship(List<IfcClassificationSelect> materialClassifications,IfcMaterial classifiedMaterial):base()
		{

			MaterialClassifications = materialClassifications;
			ClassifiedMaterial = classifiedMaterial;

		}
		public static  IfcMaterialClassificationRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialClassificationRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(MaterialClassifications != null ? MaterialClassifications.ToStepValue() : "$");
			parameters.Add(ClassifiedMaterial != null ? ClassifiedMaterial.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
