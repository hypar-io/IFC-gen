using Elements;
using IFC4;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections;

namespace Elements.Storage
{
	public class LocalStorageProvider : IDictionary<Guid, BaseIfc>
	{
		private Dictionary<Guid, BaseIfc> instances = new Dictionary<Guid, BaseIfc>();

        public LocalStorageProvider()
        {
        }

        #region IDictionary<TKey,TValue>

        public BaseIfc this[Guid key] 
		{ 
			get{return instances[key];}
			set{instances[key] = value;}
		}

        public Dictionary<Guid, BaseIfc> Elements{
			get{return instances;}
		}

        public ICollection<Guid> Keys
		{
			get{return instances.Keys;}
		}

        public ICollection<BaseIfc> Values
		{
			get{return instances.Values;}
		}

        public int Count
		{
			get{return instances.Count;}
		}

        public bool IsReadOnly
		{
			get{return false;}
		}

        public void Add(Guid key, BaseIfc value)
        {
            if(instances.ContainsKey(key))
            {
                throw new DuplicateInstanceException(key);
            }
            instances.Add(key, value);
        }

        public void Add(KeyValuePair<Guid, BaseIfc> item)
        {
            if(instances.ContainsKey(item.Key))
            {
                throw new DuplicateInstanceException(item.Key);
            }
            instances.Add(item.Key, item.Value);
        }

        public void Clear()
        {
            instances.Clear();
        }

        public bool Contains(KeyValuePair<Guid, BaseIfc> item)
        {
            if(instances.ContainsKey(item.Key))
			{
				return true;
			}
			return false;
        }

        public bool ContainsKey(Guid key)
        {
            return instances.ContainsKey(key);
        }

        public void CopyTo(KeyValuePair<Guid, BaseIfc>[] array, int arrayIndex)
        {
            throw new NotImplementedException();
        }

        public IEnumerator<KeyValuePair<Guid, BaseIfc>> GetEnumerator()
        {
            return instances.GetEnumerator();
        }

        public bool Remove(KeyValuePair<Guid, BaseIfc> item)
        {
            if(instances.ContainsKey(item.Key))
			{
				instances.Remove(item.Key);
				return true;
			}
			return false;
        }

        public bool Remove(Guid key)
        {
            if(instances.ContainsKey(key))
			{
				instances.Remove(key);
				return true;
			}
			return false;
        }

        public bool TryGetValue(Guid key, out BaseIfc value)
        {
			value = null;
            if(instances.ContainsKey(key))
			{
				value = instances[key];
				return true;
			}
			return false;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return instances.GetEnumerator();
        }

		#endregion
    }
}