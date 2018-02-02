

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinatereferencesystem.htm"/>
	/// </summary>
	public abstract partial class IfcCoordinateReferenceSystem : BaseIfc
	{
		public IfcLabel Name{get;set;} 
		public IfcText Description{get;set;} // optional
		public IfcIdentifier GeodeticDatum{get;set;} // optional
		public IfcIdentifier VerticalDatum{get;set;} // optional
		public List<IfcCoordinateOperation> HasCoordinateOperation{get;set;} // inverse


		/// <summary>
		/// Construct a IfcCoordinateReferenceSystem with all required attributes.
		/// </summary>
		public IfcCoordinateReferenceSystem(IfcLabel name):base()
		{
			HasCoordinateOperation = new List<IfcCoordinateOperation>();

			Name = name;

		}
		/// <summary>
		/// Construct a IfcCoordinateReferenceSystem with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCoordinateReferenceSystem(IfcLabel name,IfcText description,IfcIdentifier geodeticDatum,IfcIdentifier verticalDatum):base()
		{
			HasCoordinateOperation = new List<IfcCoordinateOperation>();

			Name = name;
			Description = description;
			GeodeticDatum = geodeticDatum;
			VerticalDatum = verticalDatum;

		}
		public static  IfcCoordinateReferenceSystem FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCoordinateReferenceSystem>(json); }

	}
}
