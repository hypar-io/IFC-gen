

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsolidmodel.htm"/>
	/// </summary>
	public abstract partial class IfcSolidModel : IfcGeometricRepresentationItem
	{

        [JsonIgnore]
        public IfcDimensionCount Dim{get{throw new NotImplementedException($"Derived property logic has been implemented for Dim.");}} // derived


		/// <summary>
		/// Construct a IfcSolidModel with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcSolidModel():base()
		{


		}
		public static new IfcSolidModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcSolidModel>(json); }

	}
}
