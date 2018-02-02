
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSizeSelect : Select
    {
		public IfcSizeSelect(IfcDescriptiveMeasure choice){ this.choice = choice; }
		public IfcSizeSelect(IfcLengthMeasure choice){ this.choice = choice; }
		public IfcSizeSelect(IfcNormalisedRatioMeasure choice){ this.choice = choice; }
		public IfcSizeSelect(IfcPositiveLengthMeasure choice){ this.choice = choice; }
		public IfcSizeSelect(IfcPositiveRatioMeasure choice){ this.choice = choice; }
		public IfcSizeSelect(IfcRatioMeasure choice){ this.choice = choice; }

    }
}
