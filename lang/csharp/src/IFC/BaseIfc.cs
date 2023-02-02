using System;
using Newtonsoft.Json;
using STEP;

namespace IFC
{
    public abstract class BaseIfc : IConvertibleToSTEP
    {
        [JsonProperty("id")]
        public Guid Id { get; }

        public int StepId { get; set; }

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
            return JsonConvert.SerializeObject(this, settings);
        }

        public virtual string ToSTEP()
        {
            string IfcClass = GetType().Name.ToUpper();
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