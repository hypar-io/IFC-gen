	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrecurrencetypeenum.htm
    /// </summary>
    public enum IfcRecurrenceTypeEnum {DAILY,WEEKLY,MONTHLY_BY_DAY_OF_MONTH,MONTHLY_BY_POSITION,BY_DAY_COUNT,BY_WEEKDAY_COUNT,YEARLY_BY_DAY_OF_MONTH,YEARLY_BY_POSITION}
}
