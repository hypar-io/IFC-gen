	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionalareaintegralmeasure.htm
	/// </summary>
	public class IfcSectionalAreaIntegralMeasure : BaseIfc
	{
		internal double value;

		public IfcSectionalAreaIntegralMeasure(double value){ this.value = value; }	
		public static implicit operator double(IfcSectionalAreaIntegralMeasure v){ return v.value; }
		public static implicit operator IfcSectionalAreaIntegralMeasure(double v){ return new IfcSectionalAreaIntegralMeasure(v); }	
		public static IfcSectionalAreaIntegralMeasure FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSectionalAreaIntegralMeasure>(json); }
        public override string ToString(){ return value.ToString(); }
		public override string ToStepValue(bool isSelectOption = false){
			if(isSelectOption){ return $"{GetType().Name.ToUpper()}({value.ToStepValue(isSelectOption)})"; }
			else{ return value.ToStepValue(isSelectOption); }
        }
	}
}
