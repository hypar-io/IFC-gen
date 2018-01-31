

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerassignment.htm"/>
	/// </summary>
	public  partial class IfcPresentationLayerAssignment : BaseIfc
	{
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public List<IfcLayeredItem> AssignedItems{get;set;} 
		public IfcIdentifier Identifier{get;set;} // optional


		/// <summary>
		/// Construct a IfcPresentationLayerAssignment with all required attributes.
		/// </summary>
		public IfcPresentationLayerAssignment(IfcLabel name,List<IfcLayeredItem> assignedItems):base()
		{

			Name = name;
			AssignedItems = assignedItems;

		}
		/// <summary>
		/// Construct a IfcPresentationLayerAssignment with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPresentationLayerAssignment(IfcLabel name,IfcText description,List<IfcLayeredItem> assignedItems,IfcIdentifier identifier):base()
		{

			Name = name;
			Description = description;
			AssignedItems = assignedItems;
			Identifier = identifier;

		}
		public static  IfcPresentationLayerAssignment FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPresentationLayerAssignment>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(AssignedItems != null ? AssignedItems.ToStepValue() : "$");
			parameters.Add(Identifier != null ? Identifier.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
