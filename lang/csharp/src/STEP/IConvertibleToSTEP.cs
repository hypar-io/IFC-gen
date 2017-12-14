namespace STEP
{
    public interface IConvertibleToSTEP
    {
        /// <summary>
        /// Is this object an option of a SELECT? 
        /// This can be used in the case of IFC, where
        /// SELECT instances used as parameter in a
        /// constructor, are expected to be of the form
        /// IFCBOOLEAN(.T.). Setting isSelectOption=true
        /// will convey this to the location where the 
        /// value is encoded.
        /// </summary>
        /// <param name="isSelectOption"></param>
        /// <returns></returns>
        string ToStepValue(bool isSelectOption = false);
    }
}