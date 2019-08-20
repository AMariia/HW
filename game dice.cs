

using System;
using System.Collections.Generic;

namespace Dice
{
    class Program
    {
        static void Main()
        {
            var game = new Game();
            Console.Clear();
            game.StartGame();
        }
    }

    class Game
    {
        List<Player> pList = new List<Player>();

        public Game()
        {
            for (int i = 0; i < 2; i++)
            {
                pList.Add(new Player(i));
            }
        }

        public void StartGame()
        {
            ConsoleKey key;
            do
            {
                Turn();
              
                Console.WriteLine("Счет:\n");
                foreach (var p in pList)
                {
                    Console.WriteLine($"{p.Name}: {p.Score}");
                }
                Console.WriteLine("\nЧтобы закончить игру нажмите Esc.");
            }
            while ((key = Console.ReadKey().Key) != ConsoleKey.Escape);
        }

        private void Turn()
        {
           
            for (var i = 0; i < pList.Count; i++)
            {
                Console.Write($"Ход {i + 1} игрока. Давай, {pList[i].Name}!");
                Console.ReadLine();
                int die1 = Dice.Throw();
                int die2 = Dice.Throw();
                Console.WriteLine($"{pList[i].Name} выбросил {die1} и {die2}.");
                pList[i].Score += die1 + die2;
            }
            Console.ReadLine();
        }
    }

    static class Dice
    {
        public static int Throw()
        {
            var rand = new Random(Guid.NewGuid().GetHashCode());
            return rand.Next(1, 6);
        }
    }

    class Player
    {
        public Player(int i)
        {
            Console.Write($"Игрок {i + 1}, введите имя:");
            Name = Console.ReadLine();
            Console.WriteLine($"Привет, {Name}!");
        }
        public string Name { get; set; }
        public int Score { get; set; }
    }
}
