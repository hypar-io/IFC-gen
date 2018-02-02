

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcextendedproperties.htm"/>
	/// </summary>
	public abstract partial class IfcExtendedProperties : IfcPropertyAbstraction
	{
		public IfcIdentifier Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public List<IfcProperty> Properties{get;set;} 


		/// <summary>
		/// Construct a IfcExtendedProperties with all required attributes.
		/// </summary>
		public IfcExtendedProperties(List<IfcProperty> properties):base()
		{

			Properties = properties;

		}
		/// <summary>
		/// Construct a IfcExtendedProperties with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExtendedProperties(IfcIdentifier name,IfcText description,List<IfcProperty> properties):base()
		{

			Name = name;
			Description = description;
			Properties = properties;

		}
		public static new IfcExtendedProperties FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExtendedProperties>(json); }

	}
}
