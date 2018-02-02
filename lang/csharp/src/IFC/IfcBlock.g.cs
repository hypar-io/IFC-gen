

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcblock.htm"/>
	/// </summary>
	public  partial class IfcBlock : IfcCsgPrimitive3D
	{
		public IfcPositiveLengthMeasure XLength{get;set;} 
		public IfcPositiveLengthMeasure YLength{get;set;} 
		public IfcPositiveLengthMeasure ZLength{get;set;} 


		/// <summary>
		/// Construct a IfcBlock with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBlock(IfcAxis2Placement3D position,IfcPositiveLengthMeasure xLength,IfcPositiveLengthMeasure yLength,IfcPositiveLengthMeasure zLength):base(position)
		{

			XLength = xLength;
			YLength = yLength;
			ZLength = zLength;

		}
		public static new IfcBlock FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBlock>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Position != null ? Position.ToStepValue() : "$");
			parameters.Add(XLength != null ? XLength.ToStepValue() : "$");
			parameters.Add(YLength != null ? YLength.ToStepValue() : "$");
			parameters.Add(ZLength != null ? ZLength.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
