
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    public class IfcSpecularHighlightSelect : Select
    {
		public IfcSpecularHighlightSelect(IfcSpecularExponent choice){ this.choice = choice; }
		public IfcSpecularHighlightSelect(IfcSpecularRoughness choice){ this.choice = choice; }

    }
}
