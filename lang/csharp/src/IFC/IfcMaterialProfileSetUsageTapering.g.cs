

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusagetapering.htm"/>
	/// </summary>
	public  partial class IfcMaterialProfileSetUsageTapering : IfcMaterialProfileSetUsage
	{
		public IfcMaterialProfileSet ForProfileEndSet{get;set;} 
		public IfcCardinalPointReference CardinalEndPoint{get;set;} // optional


		/// <summary>
		/// Construct a IfcMaterialProfileSetUsageTapering with all required attributes.
		/// </summary>
		public IfcMaterialProfileSetUsageTapering(IfcMaterialProfileSet forProfileSet,IfcMaterialProfileSet forProfileEndSet):base(forProfileSet)
		{

			ForProfileEndSet = forProfileEndSet;

		}
		/// <summary>
		/// Construct a IfcMaterialProfileSetUsageTapering with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcMaterialProfileSetUsageTapering(IfcMaterialProfileSet forProfileSet,IfcCardinalPointReference cardinalPoint,IfcPositiveLengthMeasure referenceExtent,IfcMaterialProfileSet forProfileEndSet,IfcCardinalPointReference cardinalEndPoint):base(forProfileSet,cardinalPoint,referenceExtent)
		{

			ForProfileEndSet = forProfileEndSet;
			CardinalEndPoint = cardinalEndPoint;

		}
		public static new IfcMaterialProfileSetUsageTapering FromJSON(string json){ return JsonConvert.DeserializeObject<IfcMaterialProfileSetUsageTapering>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ForProfileSet != null ? ForProfileSet.ToStepValue() : "$");
			parameters.Add(CardinalPoint != null ? CardinalPoint.ToStepValue() : "$");
			parameters.Add(ReferenceExtent != null ? ReferenceExtent.ToStepValue() : "$");
			parameters.Add(ForProfileEndSet != null ? ForProfileEndSet.ToStepValue() : "$");
			parameters.Add(CardinalEndPoint != null ? CardinalEndPoint.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
