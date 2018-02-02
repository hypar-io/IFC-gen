

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm"/>
	/// </summary>
	public  partial class IfcPersonAndOrganization : BaseIfc
	{
		public IfcPerson ThePerson{get;set;} 
		public IfcOrganization TheOrganization{get;set;} 
		public List<IfcActorRole> Roles{get;set;} // optional


		/// <summary>
		/// Construct a IfcPersonAndOrganization with all required attributes.
		/// </summary>
		public IfcPersonAndOrganization(IfcPerson thePerson,IfcOrganization theOrganization):base()
		{
			Roles = new List<IfcActorRole>();

			ThePerson = thePerson;
			TheOrganization = theOrganization;

		}
		/// <summary>
		/// Construct a IfcPersonAndOrganization with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPersonAndOrganization(IfcPerson thePerson,IfcOrganization theOrganization,List<IfcActorRole> roles):base()
		{

			ThePerson = thePerson;
			TheOrganization = theOrganization;
			Roles = roles;

		}
		public static  IfcPersonAndOrganization FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPersonAndOrganization>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ThePerson != null ? ThePerson.ToStepValue() : "$");
			parameters.Add(TheOrganization != null ? TheOrganization.ToStepValue() : "$");
			parameters.Add(Roles != null ? Roles.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
