using IFC4;

namespace Elements
{
    public abstract class Element
    {
        /// <summary>
        /// A reference to the BaseIFC instance.
        /// </summary>
        /// <returns></returns>
        internal BaseIfc Instance{get;}

        public Element(string name, string description)
        {
        }
    }
}