

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrimmedcurve.htm"/>
	/// </summary>
	public  partial class IfcTrimmedCurve : IfcBoundedCurve
	{
		public IfcCurve BasisCurve{get;set;} 
		public List<IfcTrimmingSelect> Trim1{get;set;} 
		public List<IfcTrimmingSelect> Trim2{get;set;} 
		public IfcBoolean SenseAgreement{get;set;} 
		public IfcTrimmingPreference MasterRepresentation{get;set;} 


		/// <summary>
		/// Construct a IfcTrimmedCurve with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTrimmedCurve(IfcCurve basisCurve,List<IfcTrimmingSelect> trim1,List<IfcTrimmingSelect> trim2,IfcBoolean senseAgreement,IfcTrimmingPreference masterRepresentation):base()
		{

			BasisCurve = basisCurve;
			Trim1 = trim1;
			Trim2 = trim2;
			SenseAgreement = senseAgreement;
			MasterRepresentation = masterRepresentation;

		}
		public static new IfcTrimmedCurve FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTrimmedCurve>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisCurve != null ? BasisCurve.ToStepValue() : "$");
			parameters.Add(Trim1 != null ? Trim1.ToStepValue() : "$");
			parameters.Add(Trim2 != null ? Trim2.ToStepValue() : "$");
			parameters.Add(SenseAgreement != null ? SenseAgreement.ToStepValue() : "$");
			parameters.Add(MasterRepresentation != null ? MasterRepresentation.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
