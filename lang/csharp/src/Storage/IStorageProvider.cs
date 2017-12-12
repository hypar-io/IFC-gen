using System;
using System.Collections.Generic;

namespace IFC4.Storage
{
    public interface IStorageProvider
    {
		void AddInstance(BaseIfc instance);
		Dictionary<Guid, BaseIfc> Instances {get;}
		IEnumerable<BaseIfc> AllInstancesDerivedFromType<T>();
		IEnumerable<T> AllInstancesOfType<T>();
		BaseIfc InstanceById(Guid id);
		void RemoveInstance(Guid id);
		void UpdateInstance(BaseIfc instance);
		event Action<Guid> InstanceAdded;
		event Action<Guid> InstanceRemoved;
		event Action<Guid> InstanceUpdated;
	}
}