using System;
using System.ComponentModel;
using System.Globalization;

namespace IFC
{
	/// <summary>
	/// Convert a select to any one of the types along its selection path.
	/// Ex: A select may have selects as its choices, which may have selects as 
	/// their choices. This converter walls the selection tree to a valid leaf
	/// and converts.
	/// </summary>
	/*internal class SelectConverter <TSelect>: TypeConverter
	{
		public override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)
		{
			var t = FindChoiceWhichCanConvertType(typeof(TSelect), sourceType);
			return t != null;
		}

		private Type FindChoiceWhichCanConvertType(Type select, Type target)
		{
			var args = select.BaseType.GetGenericArguments();
			foreach(var t in args)
			{
				if(t.IsAssignableFrom(target))
				{
					return t;
				}

				if(typeof(Select).IsAssignableFrom(t))
				{
					var test = FindChoiceWhichCanConvertType(t, target);
					if(test != null)
					{
						return test;
					}
				}
			}
			return null;
		}

		private object ReconstructSelectFromLeaf(Type select, object value)
		{
			// If the select has a constructor which takes 
			// an instance of value, then use it and return
			try
			{
				return Activator.CreateInstance(select, new object[]{value});
			}
			catch
			{	
				//Console.WriteLine($"Could not construct instance of {select.Name} using a parameter of type {value.GetType()}");
			}

			// TODO: This is a really expensive recursive try/catch loop
			// to find a working constructor. 
			foreach(var t in select.BaseType.GetGenericArguments())
			{
				try
				{
					var result = ReconstructSelectFromLeaf(t, value);
					if(result != null)
					{
						return Activator.CreateInstance(select, new object[]{result});
					}
				}
				catch
				{
					continue;
				}
			}

			return null;
		}

		public override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)
		{
			return (TSelect)ReconstructSelectFromLeaf(typeof(TSelect), value);
		}
	}*/
}