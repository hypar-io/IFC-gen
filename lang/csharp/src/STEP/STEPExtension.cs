using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using IFC;

namespace STEP
{
    /// <summary>
    /// Extensions for writing objects to STEP.
    /// </summary>
    public static class STEPExtensions
    {
        private const string NULLTOKEN = "$";

        public static string ToStepValue(this IEnumerable<IConvertibleToSTEP> list, bool isSelectOption = false)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue(isSelectOption));
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }

        public static string ToStepValue(this IEnumerable<IEnumerable<IConvertibleToSTEP>> lists, bool isSelectOption = false)
        {
            var values = new List<string>();
            foreach (var list in lists)
            {
                List<string> subValues = new List<string>();
                foreach (var item in list)
                {
                    subValues.Add(item.ToStepValue(isSelectOption));
                }
                values.Add("(" + string.Join(", ", subValues.ToArray()) + ")");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this IEnumerable<int> list, bool isSelectOption = false)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue(isSelectOption));
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }

        public static string ToStepValue(this IEnumerable<double> list, bool isSelectOption = false)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue(isSelectOption));
            }
            if (values.Count == 0) return "$";
            return "(" + string.Join(", ", values.ToArray()) + ")";
        }

        public static string ToStepValue(this IEnumerable<byte[]> list, bool isSelectOption = false)
        {
            List<string> values = new List<string>();
            foreach (var item in list)
            {
                values.Add(item.ToStepValue(isSelectOption));
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this IEnumerable<IEnumerable<int>> lists, bool isSelectOption = false)
        {
            var values = new List<string>();
            foreach (var list in lists)
            {
                List<string> subValues = new List<string>();
                foreach (int item in list)
                {
                    subValues.Add(item.ToStepValue(isSelectOption));
                }
                values.Add($"({string.Join(", ", subValues.ToArray())})");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this IEnumerable<IEnumerable<double>> lists, bool isSelectOption = false)
        {
            var values = new List<string>();
            foreach (var list in lists)
            {
                List<string> subValues = new List<string>();
                foreach (double item in list)
                {
                    subValues.Add(item.ToStepValue(isSelectOption));
                }
                values.Add($"({string.Join(", ", subValues.ToArray())})");
                subValues.Clear();
            }
            if (values.Count == 0) return "$";
            return $"({string.Join(", ", values.ToArray())})";
        }

        public static string ToStepValue(this bool value, bool isSelectOption = false)
        {
            if (value)
            {
                return ".T.";
            }
            else
            {
                return ".F.";
            }
        }

        public static string ToStepValue(this bool? value, bool isSelectOption = false)
        {
            if (value == null)
            {
                return "$";
            }
            else if (value == true)
            {
                return ".T.";
            }
            else
            {
                return ".F.";
            }
        }

        public static string ToStepValue(this int value, bool isSelectOption = false)
        {
            return value.ToString();
        }

        public static string ToStepValue(this byte[] value, bool isSelectOption = false)
        {
            if(value == null)
            {
                return NULLTOKEN;
            }

            return value.ToString();
        }

        public static string ToStepValue(this double value, bool isSelectOption = false)
        {
            if(value % 1 == 0)
            {
                return value.ToString("0.0", CultureInfo.InvariantCulture);
            }
            return value.ToString("G15", CultureInfo.InvariantCulture);
        }

        public static string ToStepValue(this string value, bool isSelectOption = false)
        {
            if(value == null)
            {
                return NULLTOKEN;
            }
            return "'" + value.ToString() + "'";
        }

        public static string ToStepValue(this Enum value, bool isSelectOption = false)
        {
            return value == null ? NULLTOKEN : "." + value.ToString() + ".";
        }
    }
}
