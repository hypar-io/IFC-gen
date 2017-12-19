namespace STEP
{
    public abstract class STEPError
    {
        protected int currId;

        public virtual string Message
        {
            get { return $"There was an error reading the STEP file at Id, {currId}."; }
        }

        public STEPError(int currId)
        {
            this.currId = currId;
        }
    }

    /// <summary>
    /// MissingIdError is generated when a STEP file references an id that does not exist.
    /// </summary>
    public class MissingIdError : STEPError
    {
        private int missingId;
        public override string Message
        {
            get { return $"Id {missingId}, referenced in constructor, {currId}, could not be found in the file."; }
        }

        public MissingIdError(int id, int missingId) : base(id)
        {
            this.missingId = missingId;
        }
    }
}