using System;

namespace HW2
{
    class Program
    {
        static void Main(string[] args)
        {
            int s = 0;
            int n = 0;
            for (int i = 2; i < 99; i++)
                 if (i % 2 == 0)

                {
                    s += i;
                    n++;
                }
                                
                     
            Console.WriteLine( " s = " +s);
            Console.WriteLine("n = " + n);


        }
    }
}
namespace Fib
{
    class Program
    {
        public static void Main(String[] args)
        {

            {
                int x = 1;
                int y = 1;
                int ans = 0;
                for (var i = 2; i < n; i++)
                {
                    ans = x + y;
                    x = y;
                    y = ans;
                }
                Console.WriteLine(ans);
            }
        }

    }

}
namespace f4
{
    class Program
    {
        public static int X { get; private set; }

        static void Main(string[] args)
        {
            Point a = new Point(2, 2);
            Point b = new Point(4, 4);
            double distance = CalculateDistance(a, b);

            Console.WriteLine(distance);
            double distanceRounded = Math.Round(distance, 2);
            Console.WriteLine(distanceRounded);
            Console.ReadKey();
        }
        static double CalculateDistance(Point a, Point b)
        {

            return Math.Sqrt(Math.Pow(b X - a.X, 2) + Math.Pow(b.Y - a.Y, 2));

        }
    }
}
namespace _3c
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("enter a number");
            double i = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Root Number" + i + "= {0:N2}", Math.Sqrt(i));

        }
    }

}
namespace _5c
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter number: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int sum = 0;
            while (n > 0)
            {
                sum += n % 10;
                n /= 10;
            }
            Console.WriteLine(sum);

        }
    }
}
namespace _6c
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("enter number: ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(n % 10);
            Console.WriteLine(n % 100 / 10);
            Console.WriteLine(n % 1000 / 100);


        }
    }
}
namespace _4c
{
    class Program
    {
        static void Main(string[] args)

        #region
        {
            int n = Convert.ToInt32(Console.ReadLine());
            int fact = 1;
            for (int i = 1; i <= n; i++)
            {
                fact = fact * i;
            }
            Console.WriteLine(fact + "n! = ");
        }
        #endregion


    }
}

