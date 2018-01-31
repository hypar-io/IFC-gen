

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationsubcontext.htm"/>
	/// </summary>
	public  partial class IfcGeometricRepresentationSubContext : IfcGeometricRepresentationContext
	{
		public IfcGeometricRepresentationContext ParentContext{get;set;} 
		public IfcPositiveRatioMeasure TargetScale{get;set;} // optional
		public IfcGeometricProjectionEnum TargetView{get;set;} 
		public IfcLabel UserDefinedTargetView{get;set;} // optional

        [JsonIgnore]
        new public IfcAxis2Placement WorldCoordinateSystem{get{throw new NotImplementedException($"Derived property logic has been implemented for WorldCoordinateSystem.");}} // derived

        [JsonIgnore]
        new public IfcDimensionCount CoordinateSpaceDimension{get{throw new NotImplementedException($"Derived property logic has been implemented for CoordinateSpaceDimension.");}} // derived

        [JsonIgnore]
        new public IfcDirection TrueNorth{get{throw new NotImplementedException($"Derived property logic has been implemented for TrueNorth.");}} // derived

        [JsonIgnore]
        new public IfcReal Precision{get{throw new NotImplementedException($"Derived property logic has been implemented for Precision.");}} // derived


		/// <summary>
		/// Construct a IfcGeometricRepresentationSubContext with all required attributes.
		/// </summary>
		public IfcGeometricRepresentationSubContext(IfcDimensionCount coordinateSpaceDimension,IfcAxis2Placement worldCoordinateSystem,IfcGeometricRepresentationContext parentContext,IfcGeometricProjectionEnum targetView):base(coordinateSpaceDimension,worldCoordinateSystem)
		{

			ParentContext = parentContext;
			TargetView = targetView;

		}
		/// <summary>
		/// Construct a IfcGeometricRepresentationSubContext with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGeometricRepresentationSubContext(IfcLabel contextIdentifier,IfcLabel contextType,IfcDimensionCount coordinateSpaceDimension,IfcReal precision,IfcAxis2Placement worldCoordinateSystem,IfcDirection trueNorth,IfcGeometricRepresentationContext parentContext,IfcPositiveRatioMeasure targetScale,IfcGeometricProjectionEnum targetView,IfcLabel userDefinedTargetView):base(contextIdentifier,contextType,coordinateSpaceDimension,precision,worldCoordinateSystem,trueNorth)
		{

			ParentContext = parentContext;
			TargetScale = targetScale;
			TargetView = targetView;
			UserDefinedTargetView = userDefinedTargetView;

		}
		public static new IfcGeometricRepresentationSubContext FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGeometricRepresentationSubContext>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ContextIdentifier != null ? ContextIdentifier.ToStepValue() : "$");
			parameters.Add(ContextType != null ? ContextType.ToStepValue() : "$");
			parameters.Add("*");
			parameters.Add("*");
			parameters.Add("*");
			parameters.Add("*");
			parameters.Add(ParentContext != null ? ParentContext.ToStepValue() : "$");
			parameters.Add(TargetScale != null ? TargetScale.ToStepValue() : "$");
			parameters.Add(TargetView.ToStepValue());
			parameters.Add(UserDefinedTargetView != null ? UserDefinedTargetView.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
