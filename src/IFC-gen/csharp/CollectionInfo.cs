using System.Collections.Generic;
using System.Linq;

namespace Express
{
	public abstract class CollectionInfo
	{
		public string Name{get;set;}
		public string Type{get;set;}
		public int Rank{get;set;}
		public int Size{get;set;}

		public CollectionInfo(){
			Rank = 1;
		}
	}

	public class SetInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{Type}{string.Join("",Enumerable.Repeat(">",Rank))}";
		}
	}

	public class ArrayInfo : CollectionInfo
	{
		public override string ToString()
		{
			var arr = $"{Type}" + string.Join("",Enumerable.Repeat("[]",Rank));
			return arr;
		}
	}

	public class ListInfo : CollectionInfo
	{
		public override string ToString()
		{
			return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{Type}{string.Join("",Enumerable.Repeat(">",Rank))}";
		}
	}
}