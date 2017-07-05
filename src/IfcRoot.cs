using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcRoot : Entity 
	{
		public IfcRoot(string name, string description)
		{
			this.globalIdField = Guid.NewGuid().ToString();
			this.nameField = name;
			this.descriptionField = description;
		}

		public IfcRoot() : base()
		{
			this.globalIdField = Guid.NewGuid().ToString();
			this.id = this.globalIdField;
		}
	}
}