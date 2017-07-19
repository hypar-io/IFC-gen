namespace IFC4
{
	/// <summary>
	/// A type wrapper for IFC.
	/// </summary>
	public class IfcType<T>
	{
		T Value{get;set;}
		public IfcType(T value)
		{
			Value = value;
		}
	}
}