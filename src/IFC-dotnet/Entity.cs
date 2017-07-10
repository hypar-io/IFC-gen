using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class Entity 
	{
		public string @ref {get;set;}
        
        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute(DataType="ID")]
        public string id {get;set;}
        
        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute(DataType="NMTOKENS")]
        public string path {get;set;}
        
        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute(DataType="integer")]
        public string[] pos {get;set;}

		public Entity()
		{
		}
	}
}