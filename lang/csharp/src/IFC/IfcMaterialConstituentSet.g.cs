

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituentset.htm"/>
	/// </summary>
	public  partial class IfcMaterialConstituentSet : IfcMaterialDefinition
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public List<IfcMaterialConstituent> MaterialConstituents{get;set;} // optional


		/// <summary>
		/// Construct a IfcMaterialConstituentSet with all required attributes.
		/// </summary>
		public IfcMaterialConstituentSet():base()
		{
			MaterialConstituents = new List<IfcMaterialConstituent>();


		}
		/// <summary>
		/// Construct a IfcMaterialConstituentSet with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialConstituentSet(IfcLabel name,IfcText description,List<IfcMaterialConstituent> materialConstituents):base()
		{

			Name = name;
			Description = description;
			MaterialConstituents = materialConstituents;

		}
		public static new IfcMaterialConstituentSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialConstituentSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(MaterialConstituents != null ? MaterialConstituents.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
