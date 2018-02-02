

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm"/>
	/// </summary>
	public  partial class IfcMappedItem : IfcRepresentationItem
	{
		public IfcRepresentationMap MappingSource{get;set;} 
		public IfcCartesianTransformationOperator MappingTarget{get;set;} 


		/// <summary>
		/// Construct a IfcMappedItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMappedItem(IfcRepresentationMap mappingSource,IfcCartesianTransformationOperator mappingTarget):base()
		{

			MappingSource = mappingSource;
			MappingTarget = mappingTarget;

		}
		public static new IfcMappedItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMappedItem>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(MappingSource != null ? MappingSource.ToStepValue() : "$");
			parameters.Add(MappingTarget != null ? MappingTarget.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
