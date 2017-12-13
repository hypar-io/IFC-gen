using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using IFC4;

namespace STEP
{
    /// <summary>
    /// An extention to write lists to STEP
    /// </summary>
    public static class STEPExtensions
    {
        public static string ToStepValue(this IEnumerable<IConvertibleToSTEP> list)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue());
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }

        public static string ToStepValue(this IEnumerable<IEnumerable<IConvertibleToSTEP>> lists)
        {
            var values = new List<string>();
            foreach (var list in lists)
            {
                List<string> subValues = new List<string>();
                foreach (var item in list)
                {
                    subValues.Add(item.ToStepValue());
                }
                values.Add("(" + string.Join(", ", subValues.ToArray()) + ")");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this IEnumerable<int> list)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue());
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }

        public static string ToStepValue(this IEnumerable<double> list)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue());
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }

        public static string ToStepValue(this IEnumerable<byte[]> list)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue());
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this IEnumerable<IEnumerable<int>> lists)
        {
            var values = new List<string>();
            foreach (var list in lists)
            {
                List<string> subValues = new List<string>();
                foreach (int item in list)
                {
                    subValues.Add(item.ToStepValue());
                }
                values.Add($"({string.Join(", ", subValues.ToArray())})");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this IEnumerable<IEnumerable<double>> lists)
        {
            var values = new List<string>();
            foreach (var list in lists)
            {
                List<string> subValues = new List<string>();
                foreach (double item in list)
                {
                    subValues.Add(item.ToStepValue());
                }
                values.Add($"({string.Join(", ", subValues.ToArray())})");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this bool value)
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

        public static string ToStepValue(this bool? value)
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

        public static string ToStepValue(this int value)
        {
            return value.ToString();
        }

        public static string ToStepValue(this byte[] value)
        {
            return value.ToString();
        }

        public static string ToStepValue(this double value)
        {
            return value.ToString("G9", CultureInfo.InvariantCulture);
        }

        public static string ToStepValue(this string value)
        {
            return "'" + value.ToString() + "'";
        }

        public static string ToStepValue(this Enum value)
        {
            return "." + value.ToString() + ".";
        }
    }
}
