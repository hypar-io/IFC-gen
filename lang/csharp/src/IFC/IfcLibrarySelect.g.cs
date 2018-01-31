
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcLibrarySelect : Select
    {
		public IfcLibrarySelect(IfcLibraryInformation choice){ this.choice = choice; }
		public IfcLibrarySelect(IfcLibraryReference choice){ this.choice = choice; }

    }
}
