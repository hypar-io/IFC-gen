using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class Entity : Object 
	{
		public Entity() : base()
		{
			this.idField = Guid.NewGuid().ToString();
		}
	}
}