	
using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
    /// <summary>
    /// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentconfidentialityenum.htm
    /// </summary>
    public enum IfcDocumentConfidentialityEnum {PUBLIC,RESTRICTED,CONFIDENTIAL,PERSONAL,USERDEFINED,NOTDEFINED}
}
