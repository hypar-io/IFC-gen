

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydependencyrelationship.htm"/>
	/// </summary>
	public  partial class IfcPropertyDependencyRelationship : IfcResourceLevelRelationship
	{
		public IfcProperty DependingProperty{get;set;} 
		public IfcProperty DependantProperty{get;set;} 
		public IfcText Expression{get;set;} // optional


		/// <summary>
		/// Construct a IfcPropertyDependencyRelationship with all required attributes.
		/// </summary>
		public IfcPropertyDependencyRelationship(IfcProperty dependingProperty,IfcProperty dependantProperty):base()
		{

			DependingProperty = dependingProperty;
			DependantProperty = dependantProperty;

		}
		/// <summary>
		/// Construct a IfcPropertyDependencyRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPropertyDependencyRelationship(IfcLabel name,IfcText description,IfcProperty dependingProperty,IfcProperty dependantProperty,IfcText expression):base(name,description)
		{

			DependingProperty = dependingProperty;
			DependantProperty = dependantProperty;
			Expression = expression;

		}
		public static new IfcPropertyDependencyRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPropertyDependencyRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(DependingProperty != null ? DependingProperty.ToStepValue() : "$");
			parameters.Add(DependantProperty != null ? DependantProperty.ToStepValue() : "$");
			parameters.Add(Expression != null ? Expression.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
