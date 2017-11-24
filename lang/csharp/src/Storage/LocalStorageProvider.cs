using System;
using System.Linq;
using System.Collections.Generic;

namespace IFC4.Storage
{
	/// <summary>
	/// LocalStorageProvider provides an in memory implementation of IStorageProvider.
	/// </summary>
	public class LocalStorageProvider : IStorageProvider
	{
		private Dictionary<Guid, BaseIfc> instances = new Dictionary<Guid, BaseIfc>();

		public event Action<Guid> InstanceAdded;
		protected virtual void OnInstanceAdded(Guid id){
			if(InstanceAdded != null){
				InstanceAdded(id);
			}
		}

		public event Action<Guid> InstanceRemoved;
		protected virtual void OnInstanceRemoved(Guid id){
			if(InstanceRemoved != null){
				InstanceRemoved(id);
			}
		}

		public event Action<Guid> InstanceUpdated;
		protected virtual void OnInstanceUpdated(Guid id){
			if(InstanceUpdated != null){
				InstanceUpdated(id);
			}
		}

		/// <summary>
		/// Add an instance to the model.
		/// </summary>
		/// <param name="instance">The instance to add to the Model.</param>
		/// <exception cref="DuplicateInstanceException">Another instance already exists in the model with the same id.</exception>
		public void AddInstance(BaseIfc instance)
		{
			if(instances.ContainsKey(instance.Id))
			{
				throw new DuplicateInstanceException(instance.Id);
			}

			instances.Add(instance.Id, instance);
		}

		/// <summary>
		/// Remove an instance from the model.
		/// </summary>
		/// <param name="id"></param>
		/// <exception cref="InstanceNotFoundException">The specified instance does not exist in the model.</exception>
		public void RemoveInstance(Guid id)
		{
			if(!instances.ContainsKey(id))
			{
				throw new InstanceNotFoundException(id);
			}

			instances.Remove(id);
		}

		/// <summary>
		/// Finds an instance in the model, given its unique identifier.
		/// </summary>
		/// <param name="id">The unique id of the instance to find.</param>
		/// <returns>An BaseIfc instance or null if no instance can be found with the provided id.</returns>
		public BaseIfc InstanceById(Guid id)
		{
			if(instances.ContainsKey(id))
			{
				return instances[id];
			}
			
			return null;
		}

		/// <summary>
		/// Find all instances of type T in the model.
		/// </summary>
		/// <returns>A collection of objects whose type is T.</returns>
		public IEnumerable<T> AllInstancesOfType<T>()
		{
			return instances.Values.OfType<T>();
		}

		/// <summary>
		/// Find all instances derived from type T in the model.
		/// </summary>
		/// <returns>A collection of objects whose types are derived from T.</returns>
		public IEnumerable<BaseIfc> AllInstancesDerivedFromType<T>()
		{
			return instances.Where(i=>typeof(T).IsAssignableFrom(i.Value.GetType())).Select(e=>e.Value);
		}

		public void UpdateInstance(BaseIfc instance){
			throw new NotImplementedException();
		}
	}
}