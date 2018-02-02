

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalsimplequantity.htm"/>
	/// </summary>
	public abstract partial class IfcPhysicalSimpleQuantity : IfcPhysicalQuantity
	{
		public IfcNamedUnit Unit{get;set;} // optional


		/// <summary>
		/// Construct a IfcPhysicalSimpleQuantity with all required attributes.
		/// </summary>
		public IfcPhysicalSimpleQuantity(IfcLabel name):base(name)
		{


		}
		/// <summary>
		/// Construct a IfcPhysicalSimpleQuantity with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPhysicalSimpleQuantity(IfcLabel name,IfcText description,IfcNamedUnit unit):base(name,description)
		{

			Unit = unit;

		}
		public static new IfcPhysicalSimpleQuantity FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPhysicalSimpleQuantity>(json); }

	}
}
