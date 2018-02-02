

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreference.htm"/>
	/// </summary>
	public  partial class IfcReference : BaseIfc
	{
		public IfcIdentifier TypeIdentifier{get;set;} // optional
		public IfcIdentifier AttributeIdentifier{get;set;} // optional
		public IfcLabel InstanceName{get;set;} // optional
		public List<IfcInteger> ListPositions{get;set;} // optional
		public IfcReference InnerReference{get;set;} // optional


		/// <summary>
		/// Construct a IfcReference with all required attributes.
		/// </summary>
		public IfcReference():base()
		{
			ListPositions = new List<IfcInteger>();


		}
		/// <summary>
		/// Construct a IfcReference with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcReference(IfcIdentifier typeIdentifier,IfcIdentifier attributeIdentifier,IfcLabel instanceName,List<IfcInteger> listPositions,IfcReference innerReference):base()
		{

			TypeIdentifier = typeIdentifier;
			AttributeIdentifier = attributeIdentifier;
			InstanceName = instanceName;
			ListPositions = listPositions;
			InnerReference = innerReference;

		}
		public static  IfcReference FromJSON(string json){ return JsonConvert.DeserializeObject<IfcReference>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(TypeIdentifier != null ? TypeIdentifier.ToStepValue() : "$");
			parameters.Add(AttributeIdentifier != null ? AttributeIdentifier.ToStepValue() : "$");
			parameters.Add(InstanceName != null ? InstanceName.ToStepValue() : "$");
			parameters.Add(ListPositions != null ? ListPositions.ToStepValue() : "$");
			parameters.Add(InnerReference != null ? InnerReference.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
