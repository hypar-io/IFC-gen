using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class Root : Entity 
	{
		public Root(string name, string description)
		{
			this.globalIdField = Guid.NewGuid().ToString();
			this.nameField = name;
			this.descriptionField = description;
		}

		public Root() : base()
		{
			this.globalIdField = Guid.NewGuid().ToString();
			this.id = this.globalIdField;
		}
	}
}