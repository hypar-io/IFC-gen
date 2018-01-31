	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostscheduletypeenum.htm
    /// </summary>
    public enum IfcCostScheduleTypeEnum {BUDGET,COSTPLAN,ESTIMATE,TENDER,PRICEDBILLOFQUANTITIES,UNPRICEDBILLOFQUANTITIES,SCHEDULEOFRATES,USERDEFINED,NOTDEFINED}
}
