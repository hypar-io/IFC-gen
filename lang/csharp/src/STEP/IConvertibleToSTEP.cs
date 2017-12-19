namespace STEP
{
    public interface IConvertibleToSTEP
    {
        string ToStepValue(bool isSelectOption = false);
    }
}