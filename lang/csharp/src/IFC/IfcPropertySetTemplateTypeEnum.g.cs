	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertysettemplatetypeenum.htm
    /// </summary>
    public enum IfcPropertySetTemplateTypeEnum {PSET_TYPEDRIVENONLY,PSET_TYPEDRIVENOVERRIDE,PSET_OCCURRENCEDRIVEN,PSET_PERFORMANCEDRIVEN,QTO_TYPEDRIVENONLY,QTO_TYPEDRIVENOVERRIDE,QTO_OCCURRENCEDRIVEN,NOTDEFINED}
}
