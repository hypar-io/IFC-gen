	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralcurvemembertypeenum.htm
    /// </summary>
    public enum IfcStructuralCurveMemberTypeEnum {RIGID_JOINED_MEMBER,PIN_JOINED_MEMBER,CABLE,TENSION_MEMBER,COMPRESSION_MEMBER,USERDEFINED,NOTDEFINED}
}
