/*
This code was generated by a tool. DO NOT MODIFY this code manually, unless you really know what you are doing.
 */
using System;
				
namespace IFC4
{
	/// <summary>
	/// 
	/// </summary>
	public partial class IfcBinarywrapper : IfcBinary 
	{
		public IfcBinarywrapper(String id,
				String path,
				String[] pos,
				String extraBits,
				Byte[] value) : base(extraBits,
				value)
		{
			this.idField = id;
			this.pathField = path;
			this.posField = pos;
		}
	}
}