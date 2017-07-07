using System;
				
namespace IFC4
{
	/// <summary>
	/// http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm
	/// </summary>
	internal abstract partial class Root : Entity 
	{
		public string GlobalId {get;set;}
		public string Name {get;set;}
		public string Description {get;set;}
		public OwnerHistory OwnerHistory {get;set;}

		public Root(string name, string description, OwnerHistory ownerHistory)
		{
			this.GlobalId = Guid.NewGuid().ToString();
			this.Name = name;
			this.Description = description;
			this.OwnerHistory = ownerHistory;
		}

		public Root() : base()
		{
			this.GlobalId = Guid.NewGuid().ToString();
			this.id = this.GlobalId;
		}
	}
}