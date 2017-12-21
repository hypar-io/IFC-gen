using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Antlr4.Runtime.Misc;
using IFC4.Generators;

namespace Express
{

    /// <summary>
    /// TypeReference stores information about a reference to a type.
    /// </summary>
    public class TypeReference
    {
        protected ILanguageGenerator generator;

        /// <summary>
        /// Name will be a type name or a path.
        /// </summary>
        /// <returns></returns>
        public TypeReference(ILanguageGenerator generator, string type, bool isCollection, int rank, bool isGeneric)
        {
            this.generator = generator;
            this.IsCollection = isCollection;
            this.Rank = rank;
            this.IsGeneric = isGeneric;
            this.type = type;
        }

        protected string type;

        /// <summary>
        /// The name of the Type that is referenced.
        /// </summary>
        /// <returns></returns>
        public string Type
        {
            get
            {
                return generator.AttributeDataType(IsCollection, Rank, type, IsGeneric);
            }
        }

        /// <summary>
        /// Is this attribute a collection type such as ARRAY, SET, LIST, or BAG?
        /// </summary>
        /// <returns></returns>
        public bool IsCollection { get; }

        /// <summary>
        /// The dimension of the collection type. Ex: Rank=2 => List<List<T>>
        /// </summary>
        /// <returns></returns>
        public int Rank { get; }

        public bool IsGeneric { get; }
    }

    /// <summary>
    /// ParameterData stores the name and type information for a parameter.
    /// </summary>
    public class ParameterData : TypeReference
    {
        public string Name { get; }

        /// <summary>
        /// A string representing the parameter corresponding to an attribute's info.
        /// </summary>
        /// <returns></returns>
        public string ParameterName
        {
            get
            {
                var name = Name;
                if (name == "Operator")
                {
                    name = "op";
                }

                // Sometimes the name will be of the format SELF\IfcGeometricRepresentationContext.TrueNorth
                // This won't work as a parameter name. Split it and takes the last part.
                var split = name.Split('.');
                if (split.Count() > 1)
                {
                    name = split.Last();
                }
                return Char.ToLowerInvariant(name[0]) + name.Substring(1);
            }
        }

        public ParameterData(ILanguageGenerator generator, string name, bool isCollection, int rank, bool isGeneric, string type) : base(generator, type, isCollection, rank, isGeneric)
        {
            this.Name = name;
        }
    }

    /// <summary>
    /// AttributeData stores information about type attributes.
    /// </summary>
    public class AttributeData : ParameterData
    {
        /// <summary>
        /// Is this attribute INVERSE?
        /// </summary>
        /// <returns></returns>
        public bool IsInverse { get; }

        /// <summary>
        /// Is this attribute DERIVED?
        /// </summary>
        /// <returns></returns>
        public bool IsDerived { get; }

        /// <summary>
        /// Is this attribute marked as OPTIONAL?
        /// </summary>
        /// <returns></returns>
        public bool IsOptional { get; }

        public AttributeData(ILanguageGenerator generator, string name, string type, int rank, bool isCollection, bool isGeneric, bool isDerived = false, bool isOptional = false, bool isInverse = false) : 
            base(generator, name, isCollection, rank, isGeneric, type)
        {
            this.IsDerived = isDerived;
            this.IsOptional = isOptional;
            this.IsInverse = isInverse;
        }

        public override string ToString()
        {
            return generator.AttributeDataString(this);
        }

        public string ToStepString()
        {
            return generator.AttributeStepString(this);
        }
    }

    /// <summary>
    /// FunctionData stores information about functions.
    /// </summary>
    public class FunctionData
    {
        public string Name { get; set; }

        public List<ParameterData> Parameters { get; }

        public TypeReference ReturnType { get; }

        public FunctionData(string name, TypeReference returnType, List<ParameterData> parameterData)
        {
            this.Name = name;
            this.Parameters = parameterData;
            this.ReturnType = returnType;
        }
    }

    public abstract class TypeData
    {
        public string Name { get; set; }
        protected ILanguageGenerator generator;
        protected ITestGenerator testGenerator;
        public TypeData(string name, ILanguageGenerator generator, ITestGenerator testGenerator)
        {
            this.generator = generator;
            this.testGenerator = testGenerator;
            Name = name;
        }
    }

    public abstract class CollectionTypeData : TypeData
    {
        /// <summary>
        /// For a TypeData which wraps a Select or an Enum, the Values
        /// collection will contain the items that are enumerated or selected.
        /// </summary>
        /// <returns></returns>
        public IEnumerable<string> Values { get; }

        public CollectionTypeData(string name, ILanguageGenerator generator, ITestGenerator testGenerator, IEnumerable<string> values) : base(name, generator, testGenerator)
        {
            this.Values = values;
        }
    }

    /// <summary>
    /// SimpleType stores data about TYPE types.
    /// </summary>
    public class WrapperType : TypeData
    {
        public bool IsCollectionType { get; }

        /// <summary>
        /// For a TypeData which wraps a collection, the rank is the depth of
        /// the collection. Ex: A collection with Rank=1 will be a List<List<object>>.
        /// </summary>
        /// <returns></returns>
        public int Rank { get; }

        /// <summary>
        /// In the case of a simple type, the WrappedType
        /// will be the name of type which is wrapped in an IfcType.
        /// </summary>
        /// <returns></returns>
        public string WrappedType{get;}

        public WrapperType(string name, string wrappedType, ILanguageGenerator generator, ITestGenerator testGenerator, bool isCollectionType, int rank) : base(name, generator, testGenerator)
        {
            this.IsCollectionType = isCollectionType;
            this.Rank = rank;
            this.WrappedType = wrappedType;
        }

        /// <summary>
        /// Return a string representing the TypeData as an IfcType.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return generator.SimpleTypeString(this);
        }
    }

    /// <summary>
    /// EnumType stores information about ENUM types.
    /// </summary>
    public class EnumType : CollectionTypeData
    {
        public EnumType(string name, ILanguageGenerator generator, ITestGenerator testGenerator, IEnumerable<string> values) : base(name, generator, testGenerator, values) { }

        /// <summary>
        /// Returns a string representing the TypeData as an Enum.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return generator.EnumTypeString(this);
        }
    }

    /// <summary>
    /// SelectType stores information about SELECT types.
    /// </summary>
    public class SelectType : CollectionTypeData
    {
        public SelectType(string name, ILanguageGenerator generator, ITestGenerator testGenerator, IEnumerable<string> values) : base(name, generator, testGenerator, values) { }

        /// <summary>
        /// Return a string representing the TypeData as a Select.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return generator.SelectTypeString(this);
        }
    }

    /// <summary>
    /// EntityData stores information about ENTITY types.
    /// </summary>
    public class Entity : TypeData
    {
        public List<Entity> Supers { get; set; }
        public List<Entity> Subs { get; set; }

        public List<AttributeData> Attributes { get; set; }

        public bool IsAbstract { get; set; }

        public Entity(string name, ILanguageGenerator generator, ITestGenerator testGenerator) : base(name, generator, testGenerator)
        {
            Name = name;
            Supers = new List<Entity>();
            Subs = new List<Entity>();
            Attributes = new List<AttributeData>();
        }

        /// <summary>
        /// Return all parents to this type all the way to the root.
        /// </summary>
        /// <returns></returns>
        internal IEnumerable<Entity> Parents()
        {
            var parents = new List<Entity>();
            parents.AddRange(Subs);

            foreach (var s in Subs)
            {
                parents.AddRange(s.Parents());
            }

            return parents;
        }

        internal IEnumerable<Entity> ParentsAndSelf()
        {
            var parents = new List<Entity>();
            parents.Add(this);

            parents.AddRange(Subs);

            foreach (var s in Subs)
            {
                parents.AddRange(s.Parents());
            }

            return parents;
        }

        /// <summary>
        /// Determine whether this is the provided type or a sub-type of the provided type.
        /// </summary>
        /// <param name="typeName"></param>
        /// <returns></returns>
        public bool IsTypeOrSubtypeOfEntity(string typeName)
        {
            if (this.Name == typeName)
            {
                return true;
            }

            foreach (var s in Subs)
            {
                var found = s.IsTypeOrSubtypeOfEntity(typeName);
                if (found)
                {
                    return true;
                }
            }

            return false;
        }

        public string Properties()
        {
            var attrs = Attributes;
            if (!attrs.Any())
            {
                return string.Empty;
            }

            var propBuilder = new StringBuilder();
            propBuilder.AppendLine();
            foreach (var a in attrs)
            {
                var prop = a.ToString();
                if (!string.IsNullOrEmpty(prop))
                {
                    propBuilder.Append(prop);
                }
            }
            return propBuilder.ToString();
        }

        public string StepProperties()
        {
            var attrs = Attributes.Where(a => !a.IsDerived && !a.IsInverse);
            if (!attrs.Any())
            {
                return string.Empty;
            }

            var propBuilder = new StringBuilder();
            propBuilder.AppendLine();
            foreach (var a in attrs)
            {
                var prop = a.ToStepString();
                if (!string.IsNullOrEmpty(prop))
                {
                    propBuilder.Append(prop);
                }
            }
            return propBuilder.ToString();
        }

        /// <summary>
        /// Return a string representing the TypeData as a Class.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return generator.EntityString(this);
        }

        public string ToTestString()
        {
            return testGenerator.EntityTest(this);
        }
    }
}