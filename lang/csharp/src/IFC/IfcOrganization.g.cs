

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganization.htm"/>
	/// </summary>
	public  partial class IfcOrganization : BaseIfc
	{
		public IfcIdentifier Identification{get;set;} // optional
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public List<IfcActorRole> Roles{get;set;} // optional
		public List<IfcAddress> Addresses{get;set;} // optional
		public List<IfcOrganizationRelationship> IsRelatedBy{get;set;} // inverse
		public List<IfcOrganizationRelationship> Relates{get;set;} // inverse
		public List<IfcPersonAndOrganization> Engages{get;set;} // inverse


		/// <summary>
		/// Construct a IfcOrganization with all required attributes.
		/// </summary>
		public IfcOrganization(IfcLabel name):base()
		{
			Roles = new List<IfcActorRole>();
			Addresses = new List<IfcAddress>();
			IsRelatedBy = new List<IfcOrganizationRelationship>();
			Relates = new List<IfcOrganizationRelationship>();
			Engages = new List<IfcPersonAndOrganization>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcOrganization with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOrganization(IfcIdentifier identification,IfcLabel name,IfcText description,List<IfcActorRole> roles,List<IfcAddress> addresses):base()
		{
			IsRelatedBy = new List<IfcOrganizationRelationship>();
			Relates = new List<IfcOrganizationRelationship>();
			Engages = new List<IfcPersonAndOrganization>();

			Identification = identification;
			Name = name;
			Description = description;
			Roles = roles;
			Addresses = addresses;

		}
		public static  IfcOrganization FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOrganization>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Roles != null ? Roles.ToStepValue() : "$");
			parameters.Add(Addresses != null ? Addresses.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
