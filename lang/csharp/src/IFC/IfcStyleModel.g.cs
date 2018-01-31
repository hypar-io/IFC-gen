

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstylemodel.htm"/>
	/// </summary>
	public abstract partial class IfcStyleModel : IfcRepresentation
	{


		/// <summary>
		/// Construct a IfcStyleModel with all required attributes.
		/// </summary>
		public IfcStyleModel(IfcRepresentationContext contextOfItems,List<IfcRepresentationItem> items):base(contextOfItems,items)
		{


		}
		/// <summary>
		/// Construct a IfcStyleModel with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcStyleModel(IfcRepresentationContext contextOfItems,IfcLabel representationIdentifier,IfcLabel representationType,List<IfcRepresentationItem> items):base(contextOfItems,representationIdentifier,representationType,items)
		{


		}
		public static new IfcStyleModel FromJSON(string json){ return JsonConvert.DeserializeObject<IfcStyleModel>(json); }

	}
}
