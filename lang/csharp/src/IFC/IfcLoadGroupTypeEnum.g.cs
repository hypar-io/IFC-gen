	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcloadgrouptypeenum.htm
    /// </summary>
    public enum IfcLoadGroupTypeEnum {LOAD_GROUP,LOAD_CASE,LOAD_COMBINATION,USERDEFINED,NOTDEFINED}
}
