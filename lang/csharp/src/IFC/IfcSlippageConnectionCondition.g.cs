

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslippageconnectioncondition.htm"/>
	/// </summary>
	public  partial class IfcSlippageConnectionCondition : IfcStructuralConnectionCondition
	{
		public IfcLengthMeasure SlippageX{get;set;} // optional
		public IfcLengthMeasure SlippageY{get;set;} // optional
		public IfcLengthMeasure SlippageZ{get;set;} // optional


		/// <summary>
		/// Construct a IfcSlippageConnectionCondition with all required attributes.
		/// </summary>
		public IfcSlippageConnectionCondition():base()
		{


		}
		/// <summary>
		/// Construct a IfcSlippageConnectionCondition with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSlippageConnectionCondition(IfcLabel name,IfcLengthMeasure slippageX,IfcLengthMeasure slippageY,IfcLengthMeasure slippageZ):base(name)
		{

			SlippageX = slippageX;
			SlippageY = slippageY;
			SlippageZ = slippageZ;

		}
		public static new IfcSlippageConnectionCondition FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSlippageConnectionCondition>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(SlippageX != null ? SlippageX.ToStepValue() : "$");
			parameters.Add(SlippageY != null ? SlippageY.ToStepValue() : "$");
			parameters.Add(SlippageZ != null ? SlippageZ.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
