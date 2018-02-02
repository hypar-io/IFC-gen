

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcontrol.htm"/>
	/// </summary>
	public abstract partial class IfcWorkControl : IfcControl
	{
		public IfcDateTime CreationDate{get;set;} 
		public List<IfcPerson> Creators{get;set;} // optional
		public IfcLabel Purpose{get;set;} // optional
		public IfcDuration Duration{get;set;} // optional
		public IfcDuration TotalFloat{get;set;} // optional
		public IfcDateTime StartTime{get;set;} 
		public IfcDateTime FinishTime{get;set;} // optional


		/// <summary>
		/// Construct a IfcWorkControl with all required attributes.
		/// </summary>
		public IfcWorkControl(IfcGloballyUniqueId globalId,IfcDateTime creationDate,IfcDateTime startTime):base(globalId)
		{
			Creators = new List<IfcPerson>();

			CreationDate = creationDate;
			StartTime = startTime;

		}
		/// <summary>
		/// Construct a IfcWorkControl with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWorkControl(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,IfcDateTime creationDate,List<IfcPerson> creators,IfcLabel purpose,IfcDuration duration,IfcDuration totalFloat,IfcDateTime startTime,IfcDateTime finishTime):base(globalId,ownerHistory,name,description,objectType,identification)
		{

			CreationDate = creationDate;
			Creators = creators;
			Purpose = purpose;
			Duration = duration;
			TotalFloat = totalFloat;
			StartTime = startTime;
			FinishTime = finishTime;

		}
		public static new IfcWorkControl FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWorkControl>(json); }

	}
}
