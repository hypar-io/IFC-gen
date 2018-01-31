	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcanalysistheorytypeenum.htm
    /// </summary>
    public enum IfcAnalysisTheoryTypeEnum {FIRST_ORDER_THEORY,SECOND_ORDER_THEORY,THIRD_ORDER_THEORY,FULL_NONLINEAR_THEORY,USERDEFINED,NOTDEFINED}
}
