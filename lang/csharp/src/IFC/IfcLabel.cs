using STEP;

namespace IFC
{
    public partial class IfcLabel : BaseIfc
    {
        public override string GetStepParameters()
        {
            return value.ToStepValue();
        }
    }
}