
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcModulusOfSubgradeReactionSelect : Select
    {
		public IfcModulusOfSubgradeReactionSelect(IfcBoolean choice){ this.choice = choice; }
		public IfcModulusOfSubgradeReactionSelect(IfcModulusOfSubgradeReactionMeasure choice){ this.choice = choice; }

    }
}
