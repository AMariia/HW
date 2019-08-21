using System;

namespace Hw4._1
{
    class Program
    {
        static double Func(double v, double a, double s)
        {

            const double g = 9.8;
            double speed = v;
            double angel = a;
            double distance =s;
            double x = Math.Asin(a);

            s = (2 * v) * x / g;

            return s;

            int gradus = 30;
            double radian = gradus * Math.PI / 180;





        }
        static void Main(string[] args)
        { }
}
}
namespace HW4._2
{
    class Program
    {
        public double Func (double v1, double v2, double t, double s)
        {
            double speed = v1;
            double speed2 = v2;
            double time = t;
            double distance = s;
           
            s = (v1 + v2) * t;
            return  s;

            Console.WriteLine(" s =  ", s);

        }

        static void Main(string[] args)
        {
        }
    }
}