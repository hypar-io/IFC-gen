

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcblobtexture.htm"/>
	/// </summary>
	public  partial class IfcBlobTexture : IfcSurfaceTexture
	{
		public IfcIdentifier RasterFormat{get;set;} 
		public IfcBinary RasterCode{get;set;} 


		/// <summary>
		/// Construct a IfcBlobTexture with all required attributes.
		/// </summary>
		public IfcBlobTexture(IfcBoolean repeatS,IfcBoolean repeatT,IfcIdentifier rasterFormat,IfcBinary rasterCode):base(repeatS,repeatT)
		{

			RasterFormat = rasterFormat;
			RasterCode = rasterCode;

		}
		/// <summary>
		/// Construct a IfcBlobTexture with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcBlobTexture(IfcBoolean repeatS,IfcBoolean repeatT,IfcIdentifier mode,IfcCartesianTransformationOperator2D textureTransform,List<IfcIdentifier> parameter,IfcIdentifier rasterFormat,IfcBinary rasterCode):base(repeatS,repeatT,mode,textureTransform,parameter)
		{

			RasterFormat = rasterFormat;
			RasterCode = rasterCode;

		}
		public static new IfcBlobTexture FromJSON(string json){ return JsonConvert.DeserializeObject<IfcBlobTexture>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(RepeatS != null ? RepeatS.ToStepValue() : "$");
			parameters.Add(RepeatT != null ? RepeatT.ToStepValue() : "$");
			parameters.Add(Mode != null ? Mode.ToStepValue() : "$");
			parameters.Add(TextureTransform != null ? TextureTransform.ToStepValue() : "$");
			parameters.Add(Parameter != null ? Parameter.ToStepValue() : "$");
			parameters.Add(RasterFormat != null ? RasterFormat.ToStepValue() : "$");
			parameters.Add(RasterCode != null ? RasterCode.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
