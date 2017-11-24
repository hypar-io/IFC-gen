using System;
using System.Collections.Generic;
using System.Text;
using IFC4;

namespace STEPExtensions
{
    /// <summary>
    /// An extention to write lists to STEP
    /// </summary>
    public static class ListExtensions
    {
        public static string ToSTEP(this IEnumerable<BaseIfc> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (BaseIfc baseIfc in baseIfcs)
            {
                values.Add(baseIfc != null ? baseIfc.ToSTEP(indexMap) : "$");
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }

    /// <summary>
    /// An extention to write interger lists to STEP
    /// </summary>
    public static class ListIntExtensions
    {
        public static string ToSTEP(this IEnumerable<int> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (int baseIfc in baseIfcs)
            {
                values.Add(baseIfc.ToSTEP(indexMap));
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }

    /// <summary>
    /// An extention to write double lists to STEP
    /// </summary>
    public static class ListDoubleExtensions
    {
        public static string ToSTEP(this IEnumerable<double> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (double baseIfc in baseIfcs)
            {
                values.Add(baseIfc.ToSTEP(indexMap));
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }

    /// <summary>
    /// An extention to write byte[] lists to STEP
    /// </summary>
    public static class ListBytesExtensions
    {
        public static string ToSTEP(this IEnumerable<byte[]> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (byte[] baseIfc in baseIfcs)
            {
                values.Add(baseIfc.ToSTEP(indexMap));
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }

    /// <summary>
    /// An extention to write embedded lists to STEP
    /// </summary>
    public static class ListsExtensions
    {
        public static string ToSTEP(this IEnumerable<IEnumerable<BaseIfc>> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (IEnumerable<BaseIfc> baseIfcList in baseIfcs)
            {
                List<string> subValues = new List<string>();
                foreach (BaseIfc baseIfc in baseIfcList)
                {
                    subValues.Add(baseIfc.ToSTEP(indexMap));
                }
                values.Add("(" + string.Join(", ", subValues.ToArray()) + ")");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }


    /// <summary>
    /// An extention to write embedded int lists to STEP
    /// </summary>
    public static class ListsIntExtensions
    {
        public static string ToSTEP(this IEnumerable<IEnumerable<int>> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (IEnumerable<int> baseIfcList in baseIfcs)
            {
                List<string> subValues = new List<string>();
                foreach (int baseIfc in baseIfcList)
                {
                    subValues.Add(baseIfc.ToSTEP(indexMap));
                }
                values.Add("(" + string.Join(", ", subValues.ToArray()) + ")");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }

    /// <summary>
    /// An extention to write embedded double lists to STEP
    /// </summary>
    public static class ListsDoubleExtensions
    {
        public static string ToSTEP(this IEnumerable<IEnumerable<double>> baseIfcs, Dictionary<Guid, int> indexMap)
        {
            List<string> values = new List<string>();
            foreach (IEnumerable<double> baseIfcList in baseIfcs)
            {
                List<string> subValues = new List<string>();
                foreach (double baseIfc in baseIfcList)
                {
                    subValues.Add(baseIfc.ToSTEP(indexMap));
                }
                values.Add("(" + string.Join(", ", subValues.ToArray()) + ")");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }
    }

    /// <summary>
    /// An extention to write bool to STEP
    /// </summary>
    public static class BoolExtensions
    {
        public static string ToSTEP(this bool value, Dictionary<Guid, int> indexMap)
        {
            if (value)
            {
                return ".TRUE.";
            }
            else
            {
                return ".FALSE.";
            }
        }
    }

    /// <summary>
    /// An extention to write nullable bool to STEP
    /// </summary>
    public static class BoolNullableExtensions
    {
        public static string ToSTEP(this bool? value, Dictionary<Guid, int> indexMap)
        {
            if (value == null)
            {
                return "$";
            }
            else if (value == true)
            {
                return ".TRUE.";
            }
            else
            {
                return ".FALSE.";
            }
        }
    }
    /// <summary>
    /// An extention to write int to STEP
    /// </summary>
    public static class IntExtensions
    {
        public static string ToSTEP(this int value, Dictionary<Guid, int> indexMap)
        {
            return value.ToString();
        }
    }

    /// <summary>
    /// An extention to write string to STEP
    /// </summary>
    public static class StringExtensions
    {
        public static string ToSTEP(this string value, Dictionary<Guid, int> indexMap)
        {
            return "'" + value.ToString() + "'";
        }
    }

    /// <summary>
    /// An extention to write byte to STEP
    /// </summary>
    public static class byteExtensions
    {
        public static string ToSTEP(this byte[] value, Dictionary<Guid, int> indexMap)
        {
            return value.ToString();
        }
    }

    /// <summary>
    /// An extention to write double to STEP
    /// </summary>
    public static class DoubleExtensions
    {
        public static string ToSTEP(this double value, Dictionary<Guid, int> indexMap)
        {
            return value.ToString("G", new System.Globalization.CultureInfo("en-US"));
        }
    }

    /// <summary>
    /// An extention to write enum to STEP
    /// </summary>
    public static class EnumExtensions
    {
        public static string ToSTEP(this Enum value, Dictionary<Guid, int> indexMap)
        {
            return "." + value.ToString() + ".";
        }
    }

}
