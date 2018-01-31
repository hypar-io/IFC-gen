

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectedfaceset.htm"/>
	/// </summary>
	public  partial class IfcConnectedFaceSet : IfcTopologicalRepresentationItem
	{
		public List<IfcFace> CfsFaces{get;set;} 


		/// <summary>
		/// Construct a IfcConnectedFaceSet with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConnectedFaceSet(List<IfcFace> cfsFaces):base()
		{

			CfsFaces = cfsFaces;

		}
		public static new IfcConnectedFaceSet FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConnectedFaceSet>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(CfsFaces != null ? CfsFaces.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
