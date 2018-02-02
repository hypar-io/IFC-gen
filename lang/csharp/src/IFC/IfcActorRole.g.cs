

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactorrole.htm"/>
	/// </summary>
	public  partial class IfcActorRole : BaseIfc
	{
		public IfcRoleEnum Role{get;set;} 
		public IfcLabel UserDefinedRole{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public List<IfcExternalReferenceRelationship> HasExternalReference{get;set;} // inverse


		/// <summary>
		/// Construct a IfcActorRole with all required attributes.
		/// </summary>
		public IfcActorRole(IfcRoleEnum role):base()
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();

			Role = role;

		}
		/// <summary>
		/// Construct a IfcActorRole with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcActorRole(IfcRoleEnum role,IfcLabel userDefinedRole,IfcText description):base()
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();

			Role = role;
			UserDefinedRole = userDefinedRole;
			Description = description;

		}
		public static  IfcActorRole FromJSON(string json){ return JsonConvert.DeserializeObject<IfcActorRole>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Role.ToStepValue());
			parameters.Add(UserDefinedRole != null ? UserDefinedRole.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
