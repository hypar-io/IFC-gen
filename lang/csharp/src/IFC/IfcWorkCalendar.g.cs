

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcalendar.htm"/>
	/// </summary>
	public  partial class IfcWorkCalendar : IfcControl
	{
		public List<IfcWorkTime> WorkingTimes{get;set;} // optional
		public List<IfcWorkTime> ExceptionTimes{get;set;} // optional
		public IfcWorkCalendarTypeEnum PredefinedType{get;set;} // optional


		/// <summary>
		/// Construct a IfcWorkCalendar with all required attributes.
		/// </summary>
		public IfcWorkCalendar(IfcGloballyUniqueId globalId):base(globalId)
		{
			WorkingTimes = new List<IfcWorkTime>();
			ExceptionTimes = new List<IfcWorkTime>();


		}
		/// <summary>
		/// Construct a IfcWorkCalendar with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcWorkCalendar(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcIdentifier identification,List<IfcWorkTime> workingTimes,List<IfcWorkTime> exceptionTimes,IfcWorkCalendarTypeEnum predefinedType):base(globalId,ownerHistory,name,description,objectType,identification)
		{

			WorkingTimes = workingTimes;
			ExceptionTimes = exceptionTimes;
			PredefinedType = predefinedType;

		}
		public static new IfcWorkCalendar FromJSON(string json){ return JsonConvert.DeserializeObject<IfcWorkCalendar>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(ObjectType != null ? ObjectType.ToStepValue() : "$");
			parameters.Add(Identification != null ? Identification.ToStepValue() : "$");
			parameters.Add(WorkingTimes != null ? WorkingTimes.ToStepValue() : "$");
			parameters.Add(ExceptionTimes != null ? ExceptionTimes.ToStepValue() : "$");
			parameters.Add(PredefinedType.ToStepValue());

            return string.Join(", ", parameters.ToArray());
        }
	}
}
