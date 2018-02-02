

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreferencerelationship.htm"/>
	/// </summary>
	public  partial class IfcExternalReferenceRelationship : IfcResourceLevelRelationship
	{
		public IfcExternalReference RelatingReference{get;set;} 
		public List<IfcResourceObjectSelect> RelatedResourceObjects{get;set;} 


		/// <summary>
		/// Construct a IfcExternalReferenceRelationship with all required attributes.
		/// </summary>
		public IfcExternalReferenceRelationship(IfcExternalReference relatingReference,List<IfcResourceObjectSelect> relatedResourceObjects):base()
		{

			RelatingReference = relatingReference;
			RelatedResourceObjects = relatedResourceObjects;

		}
		/// <summary>
		/// Construct a IfcExternalReferenceRelationship with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcExternalReferenceRelationship(IfcLabel name,IfcText description,IfcExternalReference relatingReference,List<IfcResourceObjectSelect> relatedResourceObjects):base(name,description)
		{

			RelatingReference = relatingReference;
			RelatedResourceObjects = relatedResourceObjects;

		}
		public static new IfcExternalReferenceRelationship FromJSON(string json){ return JsonConvert.DeserializeObject<IfcExternalReferenceRelationship>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(RelatingReference != null ? RelatingReference.ToStepValue() : "$");
			parameters.Add(RelatedResourceObjects != null ? RelatedResourceObjects.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
