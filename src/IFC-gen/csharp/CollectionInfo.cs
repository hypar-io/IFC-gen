using System;
using System.Collections.Generic;
using System.Linq;

namespace Express
{
	public enum CollectionType
	{
		Array,List,Set
	}

	public class CollectionInfo : TypeInfo
	{
		public int Rank{get;set;}
		public int Size{get;set;}

		public CollectionType CollectionType {get;set;}

		public CollectionInfo(string name) : base(name)
		{
			Rank = 0;
		}

		public override string ToString()
		{
			return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{ValueType}{string.Join("",Enumerable.Repeat(">",Rank))}";

			/*switch(CollectionType)
			{
				case CollectionType.Array:
					return $"{ValueType}" + string.Join("",Enumerable.Repeat($"[{Size}]",Rank));
				case CollectionType.List:
					return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{ValueType}{string.Join("",Enumerable.Repeat(">",Rank))}";
				case CollectionType.Set:
					return $"{string.Join("",Enumerable.Repeat("List<",Rank))}{ValueType}{string.Join("",Enumerable.Repeat(">",Rank))}";
				default:
					return "*** ERROR ***";
			}*/
		}
	}
}