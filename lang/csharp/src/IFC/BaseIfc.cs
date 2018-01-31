using System;
using System.ComponentModel;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;
using STEP;

namespace IFC
{
	public abstract class BaseIfc : IConvertibleToSTEP
	{
		[JsonProperty("id")]
		public Guid Id{get;}

		public int StepId{get;set;}

		public BaseIfc()
		{
			Id = Guid.NewGuid();
		}

		public virtual string ToJSON()
		{
			var settings = new JsonSerializerSettings()
			{
				Formatting = Formatting.Indented,
				TypeNameHandling = TypeNameHandling.Objects
			};
			return JsonConvert.SerializeObject(this);
		}

		public virtual string ToSTEP()
		{
			string IfcClass = this.GetType().Name.ToUpper();
			return $"#{StepId} = {IfcClass}({this.GetStepParameters()});";
		}

		public virtual string ToStepValue(bool isSelectOption = false)
		{
			return $"#{StepId}";
		}

		public virtual string GetStepParameters()
		{
			return string.Empty;
		}
    }
}