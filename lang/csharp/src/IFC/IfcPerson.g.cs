

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperson.htm"/>
	/// </summary>
	public  partial class IfcPerson : BaseIfc
	{
		public IfcIdentifier Identification{get;set;} // optional
		public IfcLabel FamilyName{get;set;} // optional
		public IfcLabel GivenName{get;set;} // optional
		public List<IfcLabel> MiddleNames{get;set;} // optional
		public List<IfcLabel> PrefixTitles{get;set;} // optional
		public List<IfcLabel> SuffixTitles{get;set;} // optional
		public List<IfcActorRole> Roles{get;set;} // optional
		public List<IfcAddress> Addresses{get;set;} // optional
		public List<IfcPersonAndOrganization> EngagedIn{get;set;} // inverse


		/// <summary>
		/// Construct a IfcPerson with all required attributes.
		/// </summary>
		public IfcPerson():base()
		{
			MiddleNames = new List<IfcLabel>();
			PrefixTitles = new List<IfcLabel>();
			SuffixTitles = new List<IfcLabel>();
			Roles = new List<IfcActorRole>();
			Addresses = new List<IfcAddress>();
			EngagedIn = new List<IfcPersonAndOrganization>();


		}
		/// <summary>
		/// Construct a IfcPerson with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPerson(IfcIdentifier identification,IfcLabel familyName,IfcLabel givenName,List<IfcLabel> middleNames,List<IfcLabel> prefixTitles,List<IfcLabel> suffixTitles,List<IfcActorRole> roles,List<IfcAddress> addresses):base()
		{
			EngagedIn = new List<IfcPersonAndOrganization>();

			Identification = identification;
			FamilyName = familyName;
			GivenName = givenName;
			MiddleNames = middleNames;
			PrefixTitles = prefixTitles;
			SuffixTitles = suffixTitles;
			Roles = roles;
			Addresses = addresses;

		}
		public static  IfcPerson FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPerson>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(FamilyName != null ? FamilyName.ToStepValue() : "$");
			parameters.Add(GivenName != null ? GivenName.ToStepValue() : "$");
			parameters.Add(MiddleNames != null ? MiddleNames.ToStepValue() : "$");
			parameters.Add(PrefixTitles != null ? PrefixTitles.ToStepValue() : "$");
			parameters.Add(SuffixTitles != null ? SuffixTitles.ToStepValue() : "$");
			parameters.Add(Roles != null ? Roles.ToStepValue() : "$");
			parameters.Add(Addresses != null ? Addresses.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
