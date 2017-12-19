using System;

namespace IFC4
{

	/// <summary>
	/// Exception thrown when an unknown type is encountered.
	/// </summary>
	public class STEPUnknownTypeException : Exception
	{
		private string desiredType;

		public override string Message
		{
			get
			{
				return $"A type corresponding to, {desiredType}, cannot be found in IFC-dotnet assembly.";
			}
		}

		public STEPUnknownTypeException(string desiredType)
		{
			this.desiredType = desiredType;
		}
	}

	/// <summary>
	/// Exception thrown when a type cannot be coerced into a target type.
	/// </summary>
	public class STEPParserException : Exception
	{
		private string parseValue;
		private Type destinationType;
		public override string Message
		{
			get{return $"The specified value, {parseValue}, could not be coerced into the type, {destinationType.Name}";}
		}

		public STEPParserException(Type destinationType, string parseValue)
		{
			this.destinationType = destinationType;
			this.parseValue = parseValue;
		}
	}

	/// <summary>
	/// Exception thrown when there is a mismatch in parameters between the type and what is provided in the STEP file.
	/// </summary>
	public class STEPParameterMismatchException : Exception
	{
		Type type;
		int providedCount;
		int expectedCount;

		public override string Message
		{
			get
			{
				return $"{type}'s constructor expects {expectedCount} parameters but {providedCount} parameters are provided.";
			}
		}

		public STEPParameterMismatchException(Type type, int providedCount, int expectedCount)
		{
			this.type = type;
			this.providedCount = providedCount;
			this.expectedCount = expectedCount;
		}
	}

	/// <summary>
	/// Exception thrown when an identifier is found for which there is not construction.
	/// </summary>
	public class STEPIdentifierNotFoundException : Exception
	{
		private int id;
		private int currLine;

		public override string Message
		{
			get
			{
				return $"The id, {id}, found at line, {currLine}, could not be found in the STEP file being opened.";
			}
		}

		public STEPIdentifierNotFoundException(int id, int currLine)
		{
			this.id = id;
			this.currLine = currLine;
		}
	}

	/// <summary>
	/// Exception thrown when the specified id does not correspond to an instance in the Model.
	/// </summary>
	public class InstanceNotFoundException : Exception
	{
		private Guid id;
		public override string Message
		{
			get
			{
				return $"An instance with Id, {id}, does not exist in the model.";
			}
		}

		public InstanceNotFoundException(Guid id)
		{
			this.id = id;
		}

	}

	/// <summary>
	/// Exception thrown when an instance with the same id already exists in the model.
	/// </summary>
	public class DuplicateInstanceException : Exception
	{
		private Guid id;

		public override string Message
		{
			get
			{
				return $"An instance with the specified Id, {id}, already exists in the Model.";
			}
		}

		public DuplicateInstanceException(Guid id)
		{
			this.id = id;
		}
	}
}