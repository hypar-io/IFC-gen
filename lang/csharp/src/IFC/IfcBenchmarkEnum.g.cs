	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbenchmarkenum.htm
    /// </summary>
    public enum IfcBenchmarkEnum {GREATERTHAN,GREATERTHANOREQUALTO,LESSTHAN,LESSTHANOREQUALTO,EQUALTO,NOTEQUALTO,INCLUDES,NOTINCLUDES,INCLUDEDIN,NOTINCLUDEDIN}
}
