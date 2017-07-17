namespace Express
{
		public abstract class CollectionInfo
	{
		public string Name{get;set;}
		public string Type{get;set;}
		public int Size{get;set;}
	}

	public class SetInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"List<{Type}>";
		}
	}

	public class ArrayInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"{Type}[{Size}]";
		}
	}

	public class ListInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"List<{Type}>";
		}
	}
}