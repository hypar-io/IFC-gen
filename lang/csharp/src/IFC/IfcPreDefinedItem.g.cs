

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineditem.htm"/>
	/// </summary>
	public abstract partial class IfcPreDefinedItem : IfcPresentationItem
	{
		public IfcLabel Name{get;set;} 


		/// <summary>
		/// Construct a IfcPreDefinedItem with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPreDefinedItem(IfcLabel name):base()
		{

			Name = name;

		}
		public static new IfcPreDefinedItem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPreDefinedItem>(json); }

	}
}
