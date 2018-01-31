
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcDerivedMeasureValue : Select
    {
		public IfcDerivedMeasureValue(IfcAbsorbedDoseMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcAccelerationMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcAngularVelocityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcAreaDensityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcCompoundPlaneAngleMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcCurvatureMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcDoseEquivalentMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcDynamicViscosityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcElectricCapacitanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcElectricChargeMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcElectricConductanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcElectricResistanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcElectricVoltageMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcEnergyMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcForceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcFrequencyMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcHeatFluxDensityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcHeatingValueMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcIlluminanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcInductanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcIntegerCountRateMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcIonConcentrationMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcIsothermalMoistureCapacityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcKinematicViscosityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcLinearForceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcLinearMomentMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcLinearStiffnessMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcLinearVelocityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcLuminousFluxMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcLuminousIntensityDistributionMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMagneticFluxDensityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMagneticFluxMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMassDensityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMassFlowRateMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMassPerLengthMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcModulusOfElasticityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcModulusOfLinearSubgradeReactionMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcModulusOfRotationalSubgradeReactionMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcModulusOfSubgradeReactionMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMoistureDiffusivityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMolecularWeightMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMomentOfInertiaMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcMonetaryMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcPHMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcPlanarForceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcPowerMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcPressureMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcRadioActivityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcRotationalFrequencyMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcRotationalMassMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcRotationalStiffnessMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSectionModulusMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSectionalAreaIntegralMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcShearModulusMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSoundPowerLevelMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSoundPowerMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSoundPressureLevelMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSoundPressureMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcSpecificHeatCapacityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcTemperatureGradientMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcTemperatureRateOfChangeMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcThermalAdmittanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcThermalConductivityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcThermalExpansionCoefficientMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcThermalResistanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcThermalTransmittanceMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcTorqueMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcVaporPermeabilityMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcVolumetricFlowRateMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcWarpingConstantMeasure choice){ this.choice = choice; }
		public IfcDerivedMeasureValue(IfcWarpingMomentMeasure choice){ this.choice = choice; }

    }
}
