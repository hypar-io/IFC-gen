	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsimplepropertytemplatetypeenum.htm
    /// </summary>
    public enum IfcSimplePropertyTemplateTypeEnum {P_SINGLEVALUE,P_ENUMERATEDVALUE,P_BOUNDEDVALUE,P_LISTVALUE,P_TABLEVALUE,P_REFERENCEVALUE,Q_LENGTH,Q_AREA,Q_VOLUME,Q_COUNT,Q_WEIGHT,Q_TIME}
}
