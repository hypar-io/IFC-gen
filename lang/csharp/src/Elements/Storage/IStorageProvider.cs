using IFC4;
using System;
using System.Collections.Generic;

namespace Elements.Storage
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