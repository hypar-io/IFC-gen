	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcinternalorexternalenum.htm
    /// </summary>
    public enum IfcInternalOrExternalEnum {INTERNAL,EXTERNAL,EXTERNAL_EARTH,EXTERNAL_WATER,EXTERNAL_FIRE,NOTDEFINED}
}
