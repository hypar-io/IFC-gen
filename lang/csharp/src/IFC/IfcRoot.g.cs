

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm"/>
	/// </summary>
	public abstract partial class IfcRoot : BaseIfc
	{
		public IfcGloballyUniqueId GlobalId{get;set;} 
		public IfcOwnerHistory OwnerHistory{get;set;} // optional
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional


		/// <summary>
		/// Construct a IfcRoot with all required attributes.
		/// </summary>
		public IfcRoot(IfcGloballyUniqueId globalId):base()
		{

			GlobalId = globalId;

		}
		/// <summary>
		/// Construct a IfcRoot with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRoot(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description):base()
		{

			GlobalId = globalId;
			OwnerHistory = ownerHistory;
			Name = name;
			Description = description;

		}
		public static  IfcRoot FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRoot>(json); }

	}
}
