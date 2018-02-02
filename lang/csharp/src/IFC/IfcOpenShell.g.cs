

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopenshell.htm"/>
	/// </summary>
	public  partial class IfcOpenShell : IfcConnectedFaceSet
	{


		/// <summary>
		/// Construct a IfcOpenShell with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcOpenShell(List<IfcFace> cfsFaces):base(cfsFaces)
		{


		}
		public static new IfcOpenShell FromJSON(string json){ return JsonConvert.DeserializeObject<IfcOpenShell>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CfsFaces != null ? CfsFaces.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
