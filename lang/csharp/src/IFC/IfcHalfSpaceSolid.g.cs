

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchalfspacesolid.htm"/>
	/// </summary>
	public  partial class IfcHalfSpaceSolid : IfcGeometricRepresentationItem
	{
		public IfcSurface BaseSurface{get;set;} 
		public IfcBoolean AgreementFlag{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcHalfSpaceSolid with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcHalfSpaceSolid(IfcSurface baseSurface,IfcBoolean agreementFlag):base()
		{

			BaseSurface = baseSurface;
			AgreementFlag = agreementFlag;

		}
		public static new IfcHalfSpaceSolid FromJSON(string json){ return JsonConvert.DeserializeObject<IfcHalfSpaceSolid>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BaseSurface != null ? BaseSurface.ToStepValue() : "$");
			parameters.Add(AgreementFlag != null ? AgreementFlag.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
