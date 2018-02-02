

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcresourceconstraintrelationship.htm"/>
	/// </summary>
	public  partial class IfcResourceConstraintRelationship : IfcResourceLevelRelationship
	{
		public IfcConstraint RelatingConstraint{get;set;} 
		public List<IfcResourceObjectSelect> RelatedResourceObjects{get;set;} 


		/// <summary>
		/// Construct a IfcResourceConstraintRelationship with all required attributes.
		/// </summary>
		public IfcResourceConstraintRelationship(IfcConstraint relatingConstraint,List<IfcResourceObjectSelect> relatedResourceObjects):base()
		{

			RelatingConstraint = relatingConstraint;
			RelatedResourceObjects = relatedResourceObjects;

		}
		/// <summary>
		/// Construct a IfcResourceConstraintRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcResourceConstraintRelationship(IfcLabel name,IfcText description,IfcConstraint relatingConstraint,List<IfcResourceObjectSelect> relatedResourceObjects):base(name,description)
		{

			RelatingConstraint = relatingConstraint;
			RelatedResourceObjects = relatedResourceObjects;

		}
		public static new IfcResourceConstraintRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcResourceConstraintRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingConstraint != null ? RelatingConstraint.ToStepValue() : "$");
			parameters.Add(RelatedResourceObjects != null ? RelatedResourceObjects.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
