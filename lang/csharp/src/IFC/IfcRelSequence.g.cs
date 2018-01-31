

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelsequence.htm"/>
	/// </summary>
	public  partial class IfcRelSequence : IfcRelConnects
	{
		public IfcProcess RelatingProcess{get;set;} 
		public IfcProcess RelatedProcess{get;set;} 
		public IfcLagTime TimeLag{get;set;} // optional
		public IfcSequenceEnum SequenceType{get;set;} // optional
		public IfcLabel UserDefinedSequenceType{get;set;} // optional


		/// <summary>
		/// Construct a IfcRelSequence with all required attributes.
		/// </summary>
		public IfcRelSequence(IfcGloballyUniqueId globalId,IfcProcess relatingProcess,IfcProcess relatedProcess):base(globalId)
		{

			RelatingProcess = relatingProcess;
			RelatedProcess = relatedProcess;

		}
		/// <summary>
		/// Construct a IfcRelSequence with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcRelSequence(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcProcess relatingProcess,IfcProcess relatedProcess,IfcLagTime timeLag,IfcSequenceEnum sequenceType,IfcLabel userDefinedSequenceType):base(globalId,ownerHistory,name,description)
		{

			RelatingProcess = relatingProcess;
			RelatedProcess = relatedProcess;
			TimeLag = timeLag;
			SequenceType = sequenceType;
			UserDefinedSequenceType = userDefinedSequenceType;

		}
		public static new IfcRelSequence FromJSON(string json){ return JsonConvert.DeserializeObject<IfcRelSequence>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(GlobalId != null ? GlobalId.ToStepValue() : "$");
			parameters.Add(OwnerHistory != null ? OwnerHistory.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingProcess != null ? RelatingProcess.ToStepValue() : "$");
			parameters.Add(RelatedProcess != null ? RelatedProcess.ToStepValue() : "$");
			parameters.Add(TimeLag != null ? TimeLag.ToStepValue() : "$");
			parameters.Add(SequenceType.ToStepValue());
			parameters.Add(UserDefinedSequenceType != null ? UserDefinedSequenceType.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
