namespace STEP
{
    public abstract class STEPError
    {
        protected int currId;

        public virtual string Message
        {
            get { return $"There was an error reading the STEP file at Id, {currId}."; }
        }

        /// <summary>
        /// Construct a STEPError.
        /// </summary>
        /// <param name="currId">The id of the instance which emitted the error.</param>
        public STEPError(int currId)
        {
            this.currId = currId;
        }
    }

    /// <summary>
    /// UnknownSchemaError is generated when the schema specified in the file is not supported.
    /// </summary>
    public class UnknownSchemaError : STEPError
    {
        private string schema;

        public override string Message
        {
            get{ return $"The specified file schema, {schema}, is not supported.";}
        }

        public UnknownSchemaError(string schema) : base(-1) 
        {
            this.schema = schema;
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