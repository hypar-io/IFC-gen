

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm"/>
	/// </summary>
	public  partial class IfcProfileDef : BaseIfc
	{
		public IfcProfileTypeEnum ProfileType{get;set;} 
		public IfcLabel ProfileName{get;set;} // optional
		public List<IfcExternalReferenceRelationship> HasExternalReference{get;set;} // inverse
		public List<IfcProfileProperties> HasProperties{get;set;} // inverse


		/// <summary>
		/// Construct a IfcProfileDef with all required attributes.
		/// </summary>
		public IfcProfileDef(IfcProfileTypeEnum profileType):base()
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();
			HasProperties = new List<IfcProfileProperties>();

			ProfileType = profileType;

		}
		/// <summary>
		/// Construct a IfcProfileDef with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProfileDef(IfcProfileTypeEnum profileType,IfcLabel profileName):base()
		{
			HasExternalReference = new List<IfcExternalReferenceRelationship>();
			HasProperties = new List<IfcProfileProperties>();

			ProfileType = profileType;
			ProfileName = profileName;

		}
		public static  IfcProfileDef FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProfileDef>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ProfileType.ToStepValue());
			parameters.Add(ProfileName != null ? ProfileName.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
