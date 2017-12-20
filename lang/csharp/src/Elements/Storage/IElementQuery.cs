using System.Collections.Generic;

namespace Elements.Storage
{
    public interface IInstanceQuery
    {
      IEnumerable<T> AllInstancesOfType<T>();
      IEnumerable<T> AllInstancesDerivedFromType<T>();
    }
}