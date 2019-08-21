using System;
using System.Linq;
using System.Text;

namespace lesson6
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            string sentence = "Удалить из строки ее часть с заданной позиции и заданной длины";
            Console.Write("Enter word length: ");
            int wordLength = 0;
            while (true)
            {
                Console.WriteLine("Enter word length: ");
                try
                {
                    wordLength = Convert.ToInt32(Console.ReadLine());
                    break;
                }

                catch (Exception)
                {
                    Console.WriteLine("Not a number");

                }
            }

           
            string[] words = sentence.Split(' ');
            for (int i = 0; i <= words.Length - 1; i++)
            {
                if (words[i].Length == wordLength&& wordLength>=3)
                {
                    words[i] = words[i].Substring(0, words[i].Length - 3) + "$$$";
                }
            }
            Console.WriteLine(string.Join(' ', words));
        }
    }
} 
namespace Hw5._4
{
    class Program
    {
        static void Main(string[] args)
        {
         
            for (int i = 0; i <= 255; i++)
            {
                Console.Write((char) i);
            }
        }
    }
}

namespace hw5._3
{
    class Program
    {
        static void Main(string[] args)
        {
            string letters = " абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
            for (int i = 0; i < letters.Length; i++)
                Console.Write(letters[i]);
            var sb = new StringBuilder();
            int[] array = new int[10];
            for (int i = 0; i < 10; i++)
            {
                sb.Append(i.ToString());

            }
            Console.WriteLine(sb);
            }
        }
    }

            
namespace Hw5
{
    class Program
    {
        static void Main(string[] args)
        {
            /* string letters = "ABCDEFGHIJKLMNOPQORSTUVWXYZ";

             {
                 Console.WriteLine(letters);

                 char[] lettersRevers = letters.ToCharArray();
                 Array.Reverse(lettersRevers);
                 letters = new string(lettersRevers);

                 Console.WriteLine(letters.ToLower());*/



            for (int i = 65; i <= 90; i++)
            {
                Console.Write($"{(char) i}");
                }
            }
        }
    }



         