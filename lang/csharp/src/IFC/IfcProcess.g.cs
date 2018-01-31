

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprocess.htm"/>
	/// </summary>
	public abstract partial class IfcProcess : IfcObject
	{
		public IfcIdentifier Identification{get;set;} // optional
		public IfcText LongDescription{get;set;} // optional
		public List<IfcRelSequence> IsPredecessorTo{get;set;} // inverse
		public List<IfcRelSequence> IsSuccessorFrom{get;set;} // inverse
		public List<IfcRelAssignsToProcess> OperatesOn{get;set;} // inverse


		/// <summary>
		/// Construct a IfcProcess with all required attributes.
		/// </summary>
		public IfcProcess(IfcGloballyUniqueId globalId):base(globalId)
		{
			IsPredecessorTo = new List<IfcRelSequence>();
			IsSuccessorFrom = new List<IfcRelSequence>();
			OperatesOn = new List<IfcRelAssignsToProcess>();


		}
		/// <summary>
		/// Construct a IfcProcess with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProcess(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcText longDescription):base(globalId,ownerHistory,name,description,objectType)
		{
			IsPredecessorTo = new List<IfcRelSequence>();
			IsSuccessorFrom = new List<IfcRelSequence>();
			OperatesOn = new List<IfcRelAssignsToProcess>();

			Identification = identification;
			LongDescription = longDescription;

		}
		public static new IfcProcess FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProcess>(json); }

	}
}
