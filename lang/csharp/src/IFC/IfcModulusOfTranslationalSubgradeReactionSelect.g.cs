
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcModulusOfTranslationalSubgradeReactionSelect : Select
    {
		public IfcModulusOfTranslationalSubgradeReactionSelect(IfcBoolean choice){ this.choice = choice; }
		public IfcModulusOfTranslationalSubgradeReactionSelect(IfcModulusOfLinearSubgradeReactionMeasure choice){ this.choice = choice; }

    }
}
