

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityvolume.htm"/>
	/// </summary>
	public  partial class IfcQuantityVolume : IfcPhysicalSimpleQuantity
	{
		public IfcVolumeMeasure VolumeValue{get;set;} 
		public IfcLabel Formula{get;set;} // optional


		/// <summary>
		/// Construct a IfcQuantityVolume with all required attributes.
		/// </summary>
		public IfcQuantityVolume(IfcLabel name,IfcVolumeMeasure volumeValue):base(name)
		{

			VolumeValue = volumeValue;

		}
		/// <summary>
		/// Construct a IfcQuantityVolume with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcQuantityVolume(IfcLabel name,IfcText description,IfcNamedUnit unit,IfcVolumeMeasure volumeValue,IfcLabel formula):base(name,description,unit)
		{

			VolumeValue = volumeValue;
			Formula = formula;

		}
		public static new IfcQuantityVolume FromJSON(string json){ return JsonConvert.DeserializeObject<IfcQuantityVolume>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(Name != null ? Name.ToStepValue() : "$");
			parameters.Add(Description != null ? Description.ToStepValue() : "$");
			parameters.Add(Unit != null ? Unit.ToStepValue() : "$");
			parameters.Add(VolumeValue != null ? VolumeValue.ToStepValue() : "$");
			parameters.Add(Formula != null ? Formula.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
