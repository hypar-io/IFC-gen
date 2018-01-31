

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconstraint.htm"/>
	/// </summary>
	public abstract partial class IfcConstraint : BaseIfc
	{
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public IfcConstraintEnum ConstraintGrade{get;set;} 
		public IfcLabel ConstraintSource{get;set;} // optional
		public IfcActorSelect CreatingActor{get;set;} // optional
		public IfcDateTime CreationTime{get;set;} // optional
		public IfcLabel UserDefinedGrade{get;set;} // optional
		public List<IfcExternalReferenceRelationship> HasExternalReferences{get;set;} // inverse
		public List<IfcResourceConstraintRelationship> PropertiesForConstraint{get;set;} // inverse


		/// <summary>
		/// Construct a IfcConstraint with all required attributes.
		/// </summary>
		public IfcConstraint(IfcLabel name,IfcConstraintEnum constraintGrade):base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			PropertiesForConstraint = new List<IfcResourceConstraintRelationship>();

			Name = name;
			ConstraintGrade = constraintGrade;

		}
		/// <summary>
		/// Construct a IfcConstraint with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcConstraint(IfcLabel name,IfcText description,IfcConstraintEnum constraintGrade,IfcLabel constraintSource,IfcActorSelect creatingActor,IfcDateTime creationTime,IfcLabel userDefinedGrade):base()
		{
			HasExternalReferences = new List<IfcExternalReferenceRelationship>();
			PropertiesForConstraint = new List<IfcResourceConstraintRelationship>();

			Name = name;
			Description = description;
			ConstraintGrade = constraintGrade;
			ConstraintSource = constraintSource;
			CreatingActor = creatingActor;
			CreationTime = creationTime;
			UserDefinedGrade = userDefinedGrade;

		}
		public static  IfcConstraint FromJSON(string json){ return JsonConvert.DeserializeObject<IfcConstraint>(json); }

	}
}
