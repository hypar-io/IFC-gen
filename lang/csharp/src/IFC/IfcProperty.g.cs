

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproperty.htm"/>
	/// </summary>
	public abstract partial class IfcProperty : IfcPropertyAbstraction
	{
		public IfcIdentifier Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public List<IfcPropertySet> PartOfPset{get;set;} // inverse
		public List<IfcPropertyDependencyRelationship> PropertyForDependance{get;set;} // inverse
		public List<IfcPropertyDependencyRelationship> PropertyDependsOn{get;set;} // inverse
		public List<IfcComplexProperty> PartOfComplex{get;set;} // inverse
		public List<IfcResourceConstraintRelationship> HasConstraints{get;set;} // inverse
		public List<IfcResourceApprovalRelationship> HasApprovals{get;set;} // inverse


		/// <summary>
		/// Construct a IfcProperty with all required attributes.
		/// </summary>
		public IfcProperty(IfcIdentifier name):base()
		{
			PartOfPset = new List<IfcPropertySet>();
			PropertyForDependance = new List<IfcPropertyDependencyRelationship>();
			PropertyDependsOn = new List<IfcPropertyDependencyRelationship>();
			PartOfComplex = new List<IfcComplexProperty>();
			HasConstraints = new List<IfcResourceConstraintRelationship>();
			HasApprovals = new List<IfcResourceApprovalRelationship>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcProperty with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcProperty(IfcIdentifier name,IfcText description):base()
		{
			PartOfPset = new List<IfcPropertySet>();
			PropertyForDependance = new List<IfcPropertyDependencyRelationship>();
			PropertyDependsOn = new List<IfcPropertyDependencyRelationship>();
			PartOfComplex = new List<IfcComplexProperty>();
			HasConstraints = new List<IfcResourceConstraintRelationship>();
			HasApprovals = new List<IfcResourceApprovalRelationship>();

			Name = name;
			Description = description;

		}
		public static new IfcProperty FromJSON(string json){ return JsonConvert.DeserializeObject<IfcProperty>(json); }

	}
}
