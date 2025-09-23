import { Conta } from "../models/Conta";
import { ContaRepository } from "../repository/ContaRepository";


export class ContaController implements ContaRepository{

private ListarContas: Array<Conta> = new Array<Conta>();
    private numero: number = 0;

    
    ProcurarPorNumero(numero: number): void{
        let buscarConta = this.buscarContaPorNumero(numero);

        if(buscarConta !== null) {
            buscarConta.visualizar();
        } else {
            console.log(`Conta numero: ${numero} não foi encontrado`);
        }
    }

    public buscarContaPorNumero(numero: number): Conta | null {
        for (let conta of this.ListarContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }

    ListarTodas(): void {
        for (let conta of this.ListarContas) {
            conta.visualizar();
       }
    }

    Cadastrar(conta: Conta): void {
        this.ListarContas.push(conta);
        console.log(`\n A Conta numero: ${conta.numero} foi criada com sucesso!`);
    }

    Atualizar(conta: Conta): void {
        let buscarConta = this.buscarContaPorNumero(conta.numero);
        
        if (buscarConta != null) {
            this.ListarContas[this.ListarContas.indexOf(buscarConta)] = conta;
            console.log(`\n A Conta numero ${conta.numero} foi atualizada com sucesso!`);
        }
        else
            console.log(`\n A Conta numero ${conta.numero} nao foi encontrada!`);
    }

    Deletar(numero: number): void {
        let buscarConta = this.buscarContaPorNumero(numero);

        if (buscarConta != null) {
            this.ListarContas.splice(this.ListarContas.indexOf(buscarConta), 1);
            console.log(`\n A conta numero ${numero} foi apagada com sucesso!!`);
            
        }
        else
            console.log(`\n A conta numero ${numero} nao foi encontrada!`);
    }

    Sacar(numero: number, valor: number): void {
        let conta = this.buscarContaPorNumero(numero);

        if (conta != null) {
            
            if (conta.sacar(valor) == true)
                console.log(`\n Saque na Conta numero ${numero} efetuada com sucesso`);
        }
        else
            console.log(`A Conta numero: ${numero} nao foi encontrada!`);
    }

    Depositar(numero: number, valor: number): void {
         
        if (Conta != null) {
            Conta.depositar(valor);
            console.log(`\n O Deposito na Conta numero ${numero} foi efetuado com sucesso!`);
        }
        else
            console.log(`\n A conta numero ${numero} nao foi encontrada!`);
    }

    Transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarContaPorNumero(numeroOrigem);
        let contaDestino = this.buscarContaPorNumero(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
            console.log(`\n Transferencia da Conta numero ${numeroOrigem} para Conta numero ${numeroDestino} foi efetuada com sucesso!`);
        }
        else
            console.log(`\n A Conta numero ${numeroOrigem} e e/ou a Conta numero ${numeroDestino} nao foram encontradas!!`);
    }

    GerarNumero(): number {
    return ++ this.numero;
}

    
}