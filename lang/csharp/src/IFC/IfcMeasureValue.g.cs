
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcMeasureValue : Select
    {
		public IfcMeasureValue(IfcAmountOfSubstanceMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcAreaMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcComplexNumber choice){ this.choice = choice; }
		public IfcMeasureValue(IfcContextDependentMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcCountMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcDescriptiveMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcElectricCurrentMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcLengthMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcLuminousIntensityMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcMassMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcNonNegativeLengthMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcNormalisedRatioMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcNumericMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcParameterValue choice){ this.choice = choice; }
		public IfcMeasureValue(IfcPlaneAngleMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcPositiveLengthMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcPositivePlaneAngleMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcPositiveRatioMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcRatioMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcSolidAngleMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcThermodynamicTemperatureMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcTimeMeasure choice){ this.choice = choice; }
		public IfcMeasureValue(IfcVolumeMeasure choice){ this.choice = choice; }

    }
}
