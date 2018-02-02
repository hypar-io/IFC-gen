

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeprocess.htm"/>
	/// </summary>
	public abstract partial class IfcTypeProcess : IfcTypeObject
	{
		public IfcIdentifier Identification{get;set;} // optional
		public IfcText LongDescription{get;set;} // optional
		public IfcLabel ProcessType{get;set;} // optional
		public List<IfcRelAssignsToProcess> OperatesOn{get;set;} // inverse


		/// <summary>
		/// Construct a IfcTypeProcess with all required attributes.
		/// </summary>
		public IfcTypeProcess(IfcGloballyUniqueId globalId):base(globalId)
		{
			OperatesOn = new List<IfcRelAssignsToProcess>();


		}
		/// <summary>
		/// Construct a IfcTypeProcess with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTypeProcess(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcIdentifier applicableOccurrence,List<IfcPropertySetDefinition> hasPropertySets,IfcIdentifier identification,IfcText longDescription,IfcLabel processType):base(globalId,ownerHistory,name,description,applicableOccurrence,hasPropertySets)
		{
			OperatesOn = new List<IfcRelAssignsToProcess>();

			Identification = identification;
			LongDescription = longDescription;
			ProcessType = processType;

		}
		public static new IfcTypeProcess FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTypeProcess>(json); }

	}
}
