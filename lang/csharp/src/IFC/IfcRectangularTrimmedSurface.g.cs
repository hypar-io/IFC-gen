

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm"/>
	/// </summary>
	public  partial class IfcRectangularTrimmedSurface : IfcBoundedSurface
	{
		public IfcSurface BasisSurface{get;set;} 
		public IfcParameterValue U1{get;set;} 
		public IfcParameterValue V1{get;set;} 
		public IfcParameterValue U2{get;set;} 
		public IfcParameterValue V2{get;set;} 
		public IfcBoolean Usense{get;set;} 
		public IfcBoolean Vsense{get;set;} 


		/// <summary>
		/// Construct a IfcRectangularTrimmedSurface with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRectangularTrimmedSurface(IfcSurface basisSurface,IfcParameterValue u1,IfcParameterValue v1,IfcParameterValue u2,IfcParameterValue v2,IfcBoolean usense,IfcBoolean vsense):base()
		{

			BasisSurface = basisSurface;
			U1 = u1;
			V1 = v1;
			U2 = u2;
			V2 = v2;
			Usense = usense;
			Vsense = vsense;

		}
		public static new IfcRectangularTrimmedSurface FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRectangularTrimmedSurface>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(BasisSurface != null ? BasisSurface.ToStepValue() : "$");
			parameters.Add(U1 != null ? U1.ToStepValue() : "$");
			parameters.Add(V1 != null ? V1.ToStepValue() : "$");
			parameters.Add(U2 != null ? U2.ToStepValue() : "$");
			parameters.Add(V2 != null ? V2.ToStepValue() : "$");
			parameters.Add(Usense != null ? Usense.ToStepValue() : "$");
			parameters.Add(Vsense != null ? Vsense.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
