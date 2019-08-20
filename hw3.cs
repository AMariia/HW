using System;

namespace buble_sort
{
 public class Bubble_Sort
    {
        public static void Main(string[] args)
        {
            int[] a = { 3, 0, 2, 5, -1, 4, 1 };
            int t;
            Console.WriteLine("Original array :");
            foreach (int aa in a)
                Console.Write(aa + " ");
            for (int p = 0; p <= a.Length - 2; p++)
            {
                for (int i = 0; i <= a.Length - 2; i++)
                {
                    if (a[i] > a[i + 1])
                    {
                        t = a[i + 1];
                        a[i + 1] = a[i];
                        a[i] = t;
                    }
                }
            }
            Console.WriteLine("\n" + "Sorted array :");
            foreach (int aa in a)
                Console.Write(aa + " ");
            Console.Write("\n");

        }
    }
}
  class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(" string");
            char res = '1';

            char[] chars = new char[6];
        }
        static int  Calculate( int a , int  b)

        {int result = 0;
            result = a + b;

            return result;

        }
    }
}         static void CalculateFunction(int a , int b)
{
    int result = 0;
    result = a + b;

}
namespace HW3
{
    class Program
    {
        static void Main(string[] args)
        {




            int[] marks = new int[3];
            marks[0] = 5;
            marks[1] = 2;
            marks[2] = 4;
            for (int i = 0; i <=marks.Length; i++)
            {
                Console.WriteLine(marks[i]);
            }
            for (int i = 0; i < marks.Length; i++)
            {
                Console.WriteLine(marks[i]);
            }

        }


    }
}

