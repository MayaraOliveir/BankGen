import { ContaCorrente } from './src/models/ContaCorrente';
import { ContaPoupanca } from './src/models/ContaPoupanca';
import readlinesync = require("readline-sync");
import { Conta } from "./src/models/Conta";
import { ContaController } from './src/controller/ContaController';


export function main() {
    

    let contas: ContaController = new ContaController();
    
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança'];
    console.log("Menu...")



    while (true) {


        console.log("=====================================================");
        console.log("                                                     ");
        console.log("                     BankGen                         ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("BankGen - O banco da sua geração!");
            sobre();
            process.exit(0);
        }

   switch (opcao) {
            case 1:
           console.log("\n\n Criar Conta \n\n");
           
           console.log("Digite o Número da agência: ");
           agencia = readlinesync.questionInt("");

           console.log("Digite o Nome do Titular da conta: ");
           titular = readlinesync.question("");

           console.log("\n Digite o tipo da Conta: ");
           tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1; 

           console.log("\n Digite o Saldo da conta (R$): ");
           saldo = readlinesync.questionFloat("");

           switch (tipo) {
            case 1:
                   console.log("Digite o Limite da Conta(R$): ");
                   limite = readlinesync.questionFloat("");
                   contas.Cadastrar(
                       new ContaCorrente(contas.GerarNumero(), agencia, tipo, titular, saldo, limite));
        
                break;
           
               case 2: 
                   
                   console.log("Digite o Dia do Aniversário da Conta Poupança: ");
                   aniversario = readlinesync.questionInt("");
                   contas.Cadastrar(new ContaPoupanca(contas.GerarNumero(), agencia, tipo, titular, saldo, aniversario));  
                break;
           }
           keyPress()
           break;

                break;
            case 2:
           console.log("\n\n Listar todas as Contas \n\n");
           contas.ListarTodas();

                break;
            case 3:
           console.log("\n\n Consultar dados da Conta - por numero \n\n");
           
           console.log("Digite o numero da Conta: ");
           numero = readlinesync.questionInt("");
           contas.ProcurarPorNumero(numero);

                keyPress()
                break;
            case 4:
           console.log("\n\n Atualizar dados da Conta \n\n");
           
           console.log("Digite o numero da conta: ");
           numero = readlinesync.questionInt("");

           let conta = contas.buscarContaPorNumero(numero);

           if (conta != null) {
               
               console.log("Digite o numero da agencia: ");
               agencia = readlinesync.questionInt("");

               console.log("Digite o Nome do Titular da conta: ");
               titular = readlinesync.question("");

               tipo = conta.tipo;

               console.log("\n Digite o Saldo da conta (R$): ");
               saldo = readlinesync.questionFloat("");

               switch (tipo) {
                   case 1:
                       console.log("Digite o Limite da Conta (R$): ");
                       limite = readlinesync.questionFloat("");
                       contas.Atualizar(
                           new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));

                       break;
                   case 2:
                       console.log("Digite o Dia do aniversario da Conta Poupança: ");
                       aniversario = readlinesync.questionInt("");
                       contas.Atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));

                    break;
               }
           } else {
               console.log(`\n A conta numero: ${numero} nao foi encontrada!`);
           }
           keyPress()
           break;

                break;
            case 5:
           console.log("\n\n Apagar uma Conta \n\n");
           console.log("Digite o numero da Conta: ");
           numero = readlinesync.questionInt("");
           contas.Deletar(numero);
           
                keyPress()           
                break;
            case 6:
           console.log("\n\n Saque \n\n");
            
           console.log("Digite o numero da Conta: ");
           numero = readlinesync.questionInt("");

           console.log("Digite o valor do Saque(R$): ");
           valor = readlinesync.questionFloat("");
           
           contas.Sacar(numero, valor);

            keyPress()
                break;
            case 7:
                console.log("\n\n Deposito \n\n");

           console.log("Digite o numero da Conta: ");
           numero = readlinesync.questionInt("");

           console.log("Digite o valor do Deposito (R$): ");
           valor = readlinesync.questionFloat("");

           contas.Depositar(numero, valor);
           
                keyPress()
                break;
            case 8:
           console.log("\n\n Transferência entre Contas \n\n");
           
           console.log("Digite o numero da Conta de Origem: ");
           numero = readlinesync.questionInt("");

           console.log("Digite o numero da Conta de Destino: ");
           numeroDestino = readlinesync.questionInt("");

           console.log("\nDigite o valor da Transferencia (R$): ")
           valor = readlinesync.questionFloat("");

           contas.Transferir(numero, numeroDestino, valor);

                keyPress
                break;
            default:
                console.log("\n Opcao Invalida! \n");

                break;
        }
    
    }
}

//Função com dados da pessoa desenvolvedora

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Mayara de Oliveira - mayaraolive00@gmail.com");
    console.log("github.com/MayaraOliveir");
    console.log("*****************************************************");
}
function keyPress(): void {
   
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

    
