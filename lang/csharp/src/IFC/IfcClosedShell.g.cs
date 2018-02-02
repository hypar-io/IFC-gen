

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclosedshell.htm"/>
	/// </summary>
	public  partial class IfcClosedShell : IfcConnectedFaceSet
	{


		/// <summary>
		/// Construct a IfcClosedShell with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcClosedShell(List<IfcFace> cfsFaces):base(cfsFaces)
		{


		}
		public static new IfcClosedShell FromJSON(string json){ return JsonConvert.DeserializeObject<IfcClosedShell>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CfsFaces != null ? CfsFaces.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
