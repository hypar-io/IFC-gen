	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricprojectionenum.htm
    /// </summary>
    public enum IfcGeometricProjectionEnum {GRAPH_VIEW,SKETCH_VIEW,MODEL_VIEW,PLAN_VIEW,REFLECTED_PLAN_VIEW,SECTION_VIEW,ELEVATION_VIEW,USERDEFINED,NOTDEFINED}
}
