using System;

namespace IFC4
{
	public abstract class Property<T>
	{
		public string Name {get;set;}
		public T Value {get;set;}
	}
}