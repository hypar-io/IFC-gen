

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationcontext.htm"/>
	/// </summary>
	public  partial class IfcGeometricRepresentationContext : IfcRepresentationContext
	{
		public IfcDimensionCount CoordinateSpaceDimension{get;set;} 
		public IfcReal Precision{get;set;} // optional
		public IfcAxis2Placement WorldCoordinateSystem{get;set;} 
		public IfcDirection TrueNorth{get;set;} // optional
		public List<IfcGeometricRepresentationSubContext> HasSubContexts{get;set;} // inverse
		public List<IfcCoordinateOperation> HasCoordinateOperation{get;set;} // inverse


		/// <summary>
		/// Construct a IfcGeometricRepresentationContext with all required attributes.
		/// </summary>
		public IfcGeometricRepresentationContext(IfcDimensionCount coordinateSpaceDimension,IfcAxis2Placement worldCoordinateSystem):base()
		{
			HasSubContexts = new List<IfcGeometricRepresentationSubContext>();
			HasCoordinateOperation = new List<IfcCoordinateOperation>();

			CoordinateSpaceDimension = coordinateSpaceDimension;
			WorldCoordinateSystem = worldCoordinateSystem;

		}
		/// <summary>
		/// Construct a IfcGeometricRepresentationContext with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcGeometricRepresentationContext(IfcLabel contextIdentifier,IfcLabel contextType,IfcDimensionCount coordinateSpaceDimension,IfcReal precision,IfcAxis2Placement worldCoordinateSystem,IfcDirection trueNorth):base(contextIdentifier,contextType)
		{
			HasSubContexts = new List<IfcGeometricRepresentationSubContext>();
			HasCoordinateOperation = new List<IfcCoordinateOperation>();

			CoordinateSpaceDimension = coordinateSpaceDimension;
			Precision = precision;
			WorldCoordinateSystem = worldCoordinateSystem;
			TrueNorth = trueNorth;

		}
		public static new IfcGeometricRepresentationContext FromJSON(string json){ return JsonConvert.DeserializeObject<IfcGeometricRepresentationContext>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(ContextIdentifier != null ? ContextIdentifier.ToStepValue() : "$");
			parameters.Add(ContextType != null ? ContextType.ToStepValue() : "$");
			parameters.Add(CoordinateSpaceDimension != null ? CoordinateSpaceDimension.ToStepValue() : "$");
			parameters.Add(Precision != null ? Precision.ToStepValue() : "$");
			parameters.Add(WorldCoordinateSystem != null ? WorldCoordinateSystem.ToStepValue() : "$");
			parameters.Add(TrueNorth != null ? TrueNorth.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
