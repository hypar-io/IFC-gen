	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsequenceenum.htm
    /// </summary>
    public enum IfcSequenceEnum {START_START,START_FINISH,FINISH_START,FINISH_FINISH,USERDEFINED,NOTDEFINED}
}
