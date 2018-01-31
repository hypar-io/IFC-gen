

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundingbox.htm"/>
	/// </summary>
	public  partial class IfcBoundingBox : IfcGeometricRepresentationItem
	{
		public IfcCartesianPoint Corner{get;set;} 
		public IfcPositiveLengthMeasure XDim{get;set;} 
		public IfcPositiveLengthMeasure YDim{get;set;} 
		public IfcPositiveLengthMeasure ZDim{get;set;} 

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcBoundingBox with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBoundingBox(IfcCartesianPoint corner,IfcPositiveLengthMeasure xDim,IfcPositiveLengthMeasure yDim,IfcPositiveLengthMeasure zDim):base()
		{

			Corner = corner;
			XDim = xDim;
			YDim = yDim;
			ZDim = zDim;

		}
		public static new IfcBoundingBox FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBoundingBox>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Corner != null ? Corner.ToStepValue() : "$");
			parameters.Add(XDim != null ? XDim.ToStepValue() : "$");
			parameters.Add(YDim != null ? YDim.ToStepValue() : "$");
			parameters.Add(ZDim != null ? ZDim.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
