

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganizationrelationship.htm"/>
	/// </summary>
	public  partial class IfcOrganizationRelationship : IfcResourceLevelRelationship
	{
		public IfcOrganization RelatingOrganization{get;set;} 
		public List<IfcOrganization> RelatedOrganizations{get;set;} 


		/// <summary>
		/// Construct a IfcOrganizationRelationship with all required attributes.
		/// </summary>
		public IfcOrganizationRelationship(IfcOrganization relatingOrganization,List<IfcOrganization> relatedOrganizations):base()
		{

			RelatingOrganization = relatingOrganization;
			RelatedOrganizations = relatedOrganizations;

		}
		/// <summary>
		/// Construct a IfcOrganizationRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOrganizationRelationship(IfcLabel name,IfcText description,IfcOrganization relatingOrganization,List<IfcOrganization> relatedOrganizations):base(name,description)
		{

			RelatingOrganization = relatingOrganization;
			RelatedOrganizations = relatedOrganizations;

		}
		public static new IfcOrganizationRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOrganizationRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingOrganization != null ? RelatingOrganization.ToStepValue() : "$");
			parameters.Add(RelatedOrganizations != null ? RelatedOrganizations.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
