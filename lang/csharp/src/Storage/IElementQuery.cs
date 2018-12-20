using System.Collections.Generic;

namespace IFC.Storage
{
    public interface IInstanceQuery
    {
      IEnumerable<T> AllInstancesOfType<T>();
      IEnumerable<T> AllInstancesDerivedFromType<T>();
    }
}