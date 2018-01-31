

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctablecolumn.htm"/>
	/// </summary>
	public  partial class IfcTableColumn : BaseIfc
	{
		public IfcIdentifier Identifier{get;set;} // optional
		public IfcLabel Name{get;set;} // optional
		public IfcText Description{get;set;} // optional
		public IfcUnit Unit{get;set;} // optional
		public IfcReference ReferencePath{get;set;} // optional


		/// <summary>
		/// Construct a IfcTableColumn with all required attributes.
		/// </summary>
		public IfcTableColumn():base()
		{


		}
		/// <summary>
		/// Construct a IfcTableColumn with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcTableColumn(IfcIdentifier identifier,IfcLabel name,IfcText description,IfcUnit unit,IfcReference referencePath):base()
		{

			Identifier = identifier;
			Name = name;
			Description = description;
			Unit = unit;
			ReferencePath = referencePath;

		}
		public static  IfcTableColumn FromJSON(string json){ return JsonConvert.DeserializeObject<IfcTableColumn>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Identifier != null ? Identifier.ToStepValue() : "$");
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(ReferencePath != null ? ReferencePath.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
