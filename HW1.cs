using System;

namespace ConsoleApp_student
{
    class Program
    {
        static void Main(string[] args)
        {
            

           Console.WriteLine(" enter number: ");
            int a = Convert.ToInt32(Console.ReadLine());
            
            {
             
                    if (a >= 0 && a<=19)

                        Console.WriteLine("F");
                           
                    if (a > 19 && a < 40)
                        Console.WriteLine("E");
                        
                    if (a > 39 && a < 60)
                        Console.WriteLine("D");
             

                            if (a > 59 && a < 75)
                        Console.WriteLine("C");
                             
                    if (a > 74 && a < 90)
                        Console.WriteLine("B");
                       
                    if (a > 89 && a < 101)
                        Console.WriteLine("A");
            }
            Console.ReadKey();
            }
        }
    }

namespace Console_a_b
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("a = ");
           
            int a =Convert.ToInt32(Console.ReadLine());
           
            Console.WriteLine("b = ");
           
            int b = Convert.ToInt32(Console.ReadLine());
           
         
           
            if (a % 2 == 0)
            {
               Console.WriteLine(a * b);
            }
            else
            {
              Console.WriteLine( a + b );
            }
            Console.ReadKey();
        }
    }
}
namespace ConsoleApp_xy
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("x = ");
            int x = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("y =");
            int y = Convert.ToInt32(Console.ReadLine());
            if (y > 0)
            {
                if (x > 0)
                    Console.WriteLine( "1");
                else // x < 0
                    Console.WriteLine("2");
            }
            else //y < o
            {
                if (x < 0)
                    Console.WriteLine("3");
                else // x > 0
                    Console.WriteLine("4");
            }
           
            Console.ReadLine();
            Console.ReadKey();
            }
        }
    }
 namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("\nЗадание 3");
            Console.WriteLine("d=");
            int d = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("h=");
            int h = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("c=");
            int c = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("сумма =");
            if ((d > 0) && (h > 0) && (c > 0))
            {
                Console.WriteLine(d + h + c);
            }
            else if ((d > 0) && (h > 0) && (c < 0))
            {
                Console.WriteLine(d + h + 0);
            }
            else if ((d > 0) && (h < 0) && (c > 0))
            {
                Console.WriteLine(d + 0 + c);
            }
            else if ((d < 0) && (h > 0) && (c > 0))
            {
                Console.WriteLine(0 + h + c);
            }
            else
                Console.WriteLine("0");
            Console.ReadKey();
        }
    }
}

namespace ConsoleApp123
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("x1 = ");
            int x1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("x2 = ");
            int x2 = Convert.ToInt32(Console.ReadLine());
            Console.Write("x3 = ");
            int x3 = Convert.ToInt32(Console.ReadLine());
            int s = 0;

            if (x1 > 0)
                 s = x1;
            { Console.WriteLine(s);
                Console.ReadLine();
                    
             if (x2 > 0)
                s = s + x2;
            
                Console.WriteLine(s);
                Console.ReadLine();
           
             if (x3 > 0)
                s = s + x3;
            {
                Console.WriteLine(s);
                Console.ReadLine();
            }
            Console.ReadKey();

                s = x1 > 0 ? x1 : 0;
                s= x2 > 0 ? x2 : 0;

                x3 > 0 ? x3 : 0;       
                }
            }
        }
    }
           
        

                       
            


                                                                  
       

        
    

