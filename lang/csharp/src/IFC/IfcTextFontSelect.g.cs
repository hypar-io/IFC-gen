
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcTextFontSelect : Select
    {
		public IfcTextFontSelect(IfcExternallyDefinedTextFont choice){ this.choice = choice; }
		public IfcTextFontSelect(IfcPreDefinedTextFont choice){ this.choice = choice; }

    }
}
