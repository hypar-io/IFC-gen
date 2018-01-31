

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxedhalfspace.htm"/>
	/// </summary>
	public  partial class IfcBoxedHalfSpace : IfcHalfSpaceSolid
	{
		public IfcBoundingBox Enclosure{get;set;} 


		/// <summary>
		/// Construct a IfcBoxedHalfSpace with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoxedHalfSpace(IfcSurface baseSurface,IfcBoolean agreementFlag,IfcBoundingBox enclosure):base(baseSurface,agreementFlag)
		{

			Enclosure = enclosure;

		}
		public static new IfcBoxedHalfSpace FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoxedHalfSpace>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BaseSurface != null ? BaseSurface.ToStepValue() : "$");
			parameters.Add(AgreementFlag != null ? AgreementFlag.ToStepValue() : "$");
			parameters.Add(Enclosure != null ? Enclosure.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
