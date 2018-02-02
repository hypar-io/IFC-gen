	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactionsourcetypeenum.htm
    /// </summary>
    public enum IfcActionSourceTypeEnum {DEAD_LOAD_G,COMPLETION_G1,LIVE_LOAD_Q,SNOW_S,WIND_W,PRESTRESSING_P,SETTLEMENT_U,TEMPERATURE_T,EARTHQUAKE_E,FIRE,IMPULSE,IMPACT,TRANSPORT,ERECTION,PROPPING,SYSTEM_IMPERFECTION,SHRINKAGE,CREEP,LACK_OF_FIT,BUOYANCY,ICE,CURRENT,WAVE,RAIN,BRAKES,USERDEFINED,NOTDEFINED}
}
