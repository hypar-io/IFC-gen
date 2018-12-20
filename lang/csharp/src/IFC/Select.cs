namespace IFC
{
    public abstract class Select : BaseIfc
    {
        protected BaseIfc choice;
        public BaseIfc Choice=>choice;
        public override string ToStepValue(bool isSelectOption = false){{ return choice.ToStepValue(true); }}
        public override string ToSTEP(){{ return $"#{choice.StepId} = {choice.GetType().Name.ToUpper()}({choice.GetStepParameters()});"; }}
    }
}