	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraintenum.htm
    /// </summary>
    public enum IfcConstraintEnum {HARD,SOFT,ADVISORY,USERDEFINED,NOTDEFINED}
}
