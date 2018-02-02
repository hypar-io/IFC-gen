
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcModulusOfRotationalSubgradeReactionSelect : Select
    {
		public IfcModulusOfRotationalSubgradeReactionSelect(IfcBoolean choice){ this.choice = choice; }
		public IfcModulusOfRotationalSubgradeReactionSelect(IfcModulusOfRotationalSubgradeReactionMeasure choice){ this.choice = choice; }

    }
}
