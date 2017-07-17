using System;

namespace IFC4
{
	/// <summary>
	/// Types derived from Select specify type constraints.
	/// </summary>
	public abstract class Select<T>
	{
		public T Value {get;set;}
	}
}