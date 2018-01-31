

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourcelevelrelationship.htm"/>
	/// </summary>
	public abstract partial class IfcResourceLevelRelationship : BaseIfc
	{
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional


		/// <summary>
		/// Construct a IfcResourceLevelRelationship with all required attributes.
		/// </summary>
		public IfcResourceLevelRelationship():base()
		{


		}
		/// <summary>
		/// Construct a IfcResourceLevelRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcResourceLevelRelationship(IfcLabel name,IfcText description):base()
		{

			Name = name;
			Description = description;

		}
		public static  IfcResourceLevelRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcResourceLevelRelationship>(json); }

	}
}
