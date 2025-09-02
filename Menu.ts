import readlinesync = require("readline-sync");

export function main() {
    
    let opcao: number;
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

                break;
            case 2:
                console.log("\n\n Listar todas as Contas \n\n");

                break;
            case 3:
                console.log("\n\n Consultar dados da Conta - por numero \n\n");

                break;
            case 4:
                console.log("\n\n Atualizar dados da Conta \n\n");

                break;
            case 5:
                console.log("\n\n Apagar uma Conta \n\n");

                break;
            case 6:
                console.log("\n\n Saque \n\n");

                break;
            case 7:
                console.log("\n\n Deposito \n\n");

                break;
            case 8:
                console.log("\n\n Transferência entre Contas \n\n");

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

main();

    
