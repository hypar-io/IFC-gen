

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcimagetexture.htm"/>
	/// </summary>
	public  partial class IfcImageTexture : IfcSurfaceTexture
	{
		public IfcURIReference URLReference{get;set;} 


		/// <summary>
		/// Construct a IfcImageTexture with all required attributes.
		/// </summary>
		public IfcImageTexture(IfcBoolean repeatS,IfcBoolean repeatT,IfcURIReference uRLReference):base(repeatS,repeatT)
		{

			URLReference = uRLReference;

		}
		/// <summary>
		/// Construct a IfcImageTexture with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcImageTexture(IfcBoolean repeatS,IfcBoolean repeatT,IfcIdentifier mode,IfcCartesianTransformationOperator2D textureTransform,List<IfcIdentifier> parameter,IfcURIReference uRLReference):base(repeatS,repeatT,mode,textureTransform,parameter)
		{

			URLReference = uRLReference;

		}
		public static new IfcImageTexture FromJSON(string json){ return JsonConvert.DeserializeObject<IfcImageTexture>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(RepeatS != null ? RepeatS.ToStepValue() : "$");
			parameters.Add(RepeatT != null ? RepeatT.ToStepValue() : "$");
			parameters.Add(Mode != null ? Mode.ToStepValue() : "$");
			parameters.Add(TextureTransform != null ? TextureTransform.ToStepValue() : "$");
			parameters.Add(Parameter != null ? Parameter.ToStepValue() : "$");
			parameters.Add(URLReference != null ? URLReference.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
