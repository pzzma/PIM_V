using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Program {
    class Program {
        static void Main (string[] args) {
            Console.Write("Insira um número: ");
            int num = Convert.ToInt32(Console.ReadLine());
            if (num > 0) {
                Console.WriteLine("{0} é um número positivo!", num);
            } else if (num < 0) {
                Console.WriteLine("{0} é um número negativo!", num);
            } else {
                Console.WriteLine("{0} podemos dizer que é neutro, nem positivo, nem negativo. O {1}divisor de águas{1} talvez?", num ,'"');
            }
        }
    }
}