using System;
using System.Collections.Generic;

namespace IFC4{
    public interface IModel
    {
		void AddInstance(BaseIfc instance);
		IEnumerable<BaseIfc> AllInstancesDerivedFromType<T>();
		IEnumerable<T> AllInstancesOfType<T>();
		BaseIfc InstanceById(Guid id);
		void RemoveInstance(Guid id);
		void UpdateInstance(BaseIfc instance);
	}
}