

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfailureconnectioncondition.htm"/>
	/// </summary>
	public  partial class IfcFailureConnectionCondition : IfcStructuralConnectionCondition
	{
		public IfcForceMeasure TensionFailureX{get;set;} // optional
		public IfcForceMeasure TensionFailureY{get;set;} // optional
		public IfcForceMeasure TensionFailureZ{get;set;} // optional
		public IfcForceMeasure CompressionFailureX{get;set;} // optional
		public IfcForceMeasure CompressionFailureY{get;set;} // optional
		public IfcForceMeasure CompressionFailureZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcFailureConnectionCondition with all required attributes.
		/// </summary>
		public IfcFailureConnectionCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcFailureConnectionCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcFailureConnectionCondition(IfcLabel name,IfcForceMeasure tensionFailureX,IfcForceMeasure tensionFailureY,IfcForceMeasure tensionFailureZ,IfcForceMeasure compressionFailureX,IfcForceMeasure compressionFailureY,IfcForceMeasure compressionFailureZ):base(name)
		{

			TensionFailureX = tensionFailureX;
			TensionFailureY = tensionFailureY;
			TensionFailureZ = tensionFailureZ;
			CompressionFailureX = compressionFailureX;
			CompressionFailureY = compressionFailureY;
			CompressionFailureZ = compressionFailureZ;

		}
		public static new IfcFailureConnectionCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcFailureConnectionCondition>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(TensionFailureX != null ? TensionFailureX.ToStepValue() : "$");
			parameters.Add(TensionFailureY != null ? TensionFailureY.ToStepValue() : "$");
			parameters.Add(TensionFailureZ != null ? TensionFailureZ.ToStepValue() : "$");
			parameters.Add(CompressionFailureX != null ? CompressionFailureX.ToStepValue() : "$");
			parameters.Add(CompressionFailureY != null ? CompressionFailureY.ToStepValue() : "$");
			parameters.Add(CompressionFailureZ != null ? CompressionFailureZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
