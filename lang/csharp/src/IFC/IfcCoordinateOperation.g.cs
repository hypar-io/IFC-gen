

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinateoperation.htm"/>
	/// </summary>
	public abstract partial class IfcCoordinateOperation : BaseIfc
	{
		public IfcCoordinateReferenceSystemSelect SourceCRS{get;set;} 
		public IfcCoordinateReferenceSystem TargetCRS{get;set;} 


		/// <summary>
		/// Construct a IfcCoordinateOperation with all required attributes.
		/// </summary>
		[JsonConstructor]
		public IfcCoordinateOperation(IfcCoordinateReferenceSystemSelect sourceCRS,IfcCoordinateReferenceSystem targetCRS):base()
		{

			SourceCRS = sourceCRS;
			TargetCRS = targetCRS;

		}
		public static  IfcCoordinateOperation FromJSON(string json){ return JsonConvert.DeserializeObject<IfcCoordinateOperation>(json); }

	}
}
