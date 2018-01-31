

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccontext.htm"/>
	/// </summary>
	public abstract partial class IfcContext : IfcObjectDefinition
	{
		public IfcLabel ObjectType{get;set;} // optional
		public IfcLabel LongName{get;set;} // optional
		public IfcLabel Phase{get;set;} // optional
		public List<IfcRepresentationContext> RepresentationContexts{get;set;} // optional
		public IfcUnitAssignment UnitsInContext{get;set;} // optional
		public List<IfcRelDefinesByProperties> IsDefinedBy{get;set;} // inverse
		public List<IfcRelDeclares> Declares{get;set;} // inverse


		/// <summary>
		/// Construct a IfcContext with all required attributes.
		/// </summary>
		public IfcContext(IfcGloballyUniqueId globalId):base(globalId)
		{
			RepresentationContexts = new List<IfcRepresentationContext>();
			IsDefinedBy = new List<IfcRelDefinesByProperties>();
			Declares = new List<IfcRelDeclares>();


		}
		/// <summary>
		/// Construct a IfcContext with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcContext(IfcGloballyUniqueId globalId,IfcOwnerHistory ownerHistory,IfcLabel name,IfcText description,IfcLabel objectType,IfcLabel longName,IfcLabel phase,List<IfcRepresentationContext> representationContexts,IfcUnitAssignment unitsInContext):base(globalId,ownerHistory,name,description)
		{
			IsDefinedBy = new List<IfcRelDefinesByProperties>();
			Declares = new List<IfcRelDeclares>();

			ObjectType = objectType;
			LongName = longName;
			Phase = phase;
			RepresentationContexts = representationContexts;
			UnitsInContext = unitsInContext;

		}
		public static new IfcContext FromJSON(string json){ return JsonConvert.DeserializeObject<IfcContext>(json); }

	}
}
