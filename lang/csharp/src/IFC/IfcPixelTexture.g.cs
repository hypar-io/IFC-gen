

using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;
	
namespace IFC
{
	/// <summary>
	/// <see href="http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpixeltexture.htm"/>
	/// </summary>
	public  partial class IfcPixelTexture : IfcSurfaceTexture
	{
		public IfcInteger Width{get;set;} 
		public IfcInteger Height{get;set;} 
		public IfcInteger ColourComponents{get;set;} 
		public List<IfcBinary> Pixel{get;set;} 


		/// <summary>
		/// Construct a IfcPixelTexture with all required attributes.
		/// </summary>
		public IfcPixelTexture(IfcBoolean repeatS,IfcBoolean repeatT,IfcInteger width,IfcInteger height,IfcInteger colourComponents,List<IfcBinary> pixel):base(repeatS,repeatT)
		{

			Width = width;
			Height = height;
			ColourComponents = colourComponents;
			Pixel = pixel;

		}
		/// <summary>
		/// Construct a IfcPixelTexture with required and optional attributes.
		/// </summary>
		[JsonConstructor]
		public IfcPixelTexture(IfcBoolean repeatS,IfcBoolean repeatT,IfcIdentifier mode,IfcCartesianTransformationOperator2D textureTransform,List<IfcIdentifier> parameter,IfcInteger width,IfcInteger height,IfcInteger colourComponents,List<IfcBinary> pixel):base(repeatS,repeatT,mode,textureTransform,parameter)
		{

			Width = width;
			Height = height;
			ColourComponents = colourComponents;
			Pixel = pixel;

		}
		public static new IfcPixelTexture FromJSON(string json){ return JsonConvert.DeserializeObject<IfcPixelTexture>(json); }

        public override string GetStepParameters()
        {
            var parameters = new List<string>();
			parameters.Add(RepeatS != null ? RepeatS.ToStepValue() : "$");
			parameters.Add(RepeatT != null ? RepeatT.ToStepValue() : "$");
			parameters.Add(Mode != null ? Mode.ToStepValue() : "$");
			parameters.Add(TextureTransform != null ? TextureTransform.ToStepValue() : "$");
			parameters.Add(Parameter != null ? Parameter.ToStepValue() : "$");
			parameters.Add(Width != null ? Width.ToStepValue() : "$");
			parameters.Add(Height != null ? Height.ToStepValue() : "$");
			parameters.Add(ColourComponents != null ? ColourComponents.ToStepValue() : "$");
			parameters.Add(Pixel != null ? Pixel.ToStepValue() : "$");

            return string.Join(", ", parameters.ToArray());
        }
	}
}
