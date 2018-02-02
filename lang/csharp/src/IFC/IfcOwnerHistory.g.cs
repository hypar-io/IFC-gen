

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcownerhistory.htm"/>
	/// </summary>
	public  partial class IfcOwnerHistory : BaseIfc
	{
		public IfcPersonAndOrganization OwningUser{get;set;} 
		public IfcApplication OwningApplication{get;set;} 
		public IfcStateEnum State{get;set;} // optional
		public IfcChangeActionEnum ChangeAction{get;set;} // optional
		public IfcTimeStamp LastModifiedDate{get;set;} // optional
		public IfcPersonAndOrganization LastModifyingUser{get;set;} // optional
		public IfcApplication LastModifyingApplication{get;set;} // optional
		public IfcTimeStamp CreationDate{get;set;} 


		/// <summary>
		/// Construct a IfcOwnerHistory with all required attributes.
		/// </summary>
		public IfcOwnerHistory(IfcPersonAndOrganization owningUser,IfcApplication owningApplication,IfcTimeStamp creationDate):base()
		{

			OwningUser = owningUser;
			OwningApplication = owningApplication;
			CreationDate = creationDate;

		}
		/// <summary>
		/// Construct a IfcOwnerHistory with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOwnerHistory(IfcPersonAndOrganization owningUser,IfcApplication owningApplication,IfcStateEnum state,IfcChangeActionEnum changeAction,IfcTimeStamp lastModifiedDate,IfcPersonAndOrganization lastModifyingUser,IfcApplication lastModifyingApplication,IfcTimeStamp creationDate):base()
		{

			OwningUser = owningUser;
			OwningApplication = owningApplication;
			State = state;
			ChangeAction = changeAction;
			LastModifiedDate = lastModifiedDate;
			LastModifyingUser = lastModifyingUser;
			LastModifyingApplication = lastModifyingApplication;
			CreationDate = creationDate;

		}
		public static  IfcOwnerHistory FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOwnerHistory>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(OwningUser != null ? OwningUser.ToStepValue() : "$");
			parameters.Add(OwningApplication != null ? OwningApplication.ToStepValue() : "$");
			parameters.Add(State.ToStepValue());
			parameters.Add(ChangeAction.ToStepValue());
			parameters.Add(LastModifiedDate != null ? LastModifiedDate.ToStepValue() : "$");
			parameters.Add(LastModifyingUser != null ? LastModifyingUser.ToStepValue() : "$");
			parameters.Add(LastModifyingApplication != null ? LastModifyingApplication.ToStepValue() : "$");
			parameters.Add(CreationDate != null ? CreationDate.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
