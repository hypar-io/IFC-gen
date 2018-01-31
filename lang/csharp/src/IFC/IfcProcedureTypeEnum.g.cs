	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproceduretypeenum.htm
    /// </summary>
    public enum IfcProcedureTypeEnum {ADVICE_CAUTION,ADVICE_NOTE,ADVICE_WARNING,CALIBRATION,DIAGNOSTIC,SHUTDOWN,STARTUP,USERDEFINED,NOTDEFINED}
}
