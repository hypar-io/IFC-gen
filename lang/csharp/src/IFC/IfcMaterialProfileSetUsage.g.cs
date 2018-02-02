

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusage.htm"/>
	/// </summary>
	public  partial class IfcMaterialProfileSetUsage : IfcMaterialUsageDefinition
	{
		public IfcMaterialProfileSet ForProfileSet{get;set;} 
		public IfcCardinalPointReference CardinalPoint{get;set;} // optional
		public IfcPositiveLengthMeasure ReferenceExtent{get;set;} // optional


		/// <summary>
		/// Construct a IfcMaterialProfileSetUsage with all required attributes.
		/// </summary>
		public IfcMaterialProfileSetUsage(IfcMaterialProfileSet forProfileSet):base()
		{

			ForProfileSet = forProfileSet;

		}
		/// <summary>
		/// Construct a IfcMaterialProfileSetUsage with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialProfileSetUsage(IfcMaterialProfileSet forProfileSet,IfcCardinalPointReference cardinalPoint,IfcPositiveLengthMeasure referenceExtent):base()
		{

			ForProfileSet = forProfileSet;
			CardinalPoint = cardinalPoint;
			ReferenceExtent = referenceExtent;

		}
		public static new IfcMaterialProfileSetUsage FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialProfileSetUsage>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ForProfileSet != null ? ForProfileSet.ToStepValue() : "$");
			parameters.Add(CardinalPoint != null ? CardinalPoint.ToStepValue() : "$");
			parameters.Add(ReferenceExtent != null ? ReferenceExtent.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
