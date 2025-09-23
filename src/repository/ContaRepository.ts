import { Conta } from "../models/Conta";

export interface ContaRepository{

    //Crud da conta
    
    ProcurarPorNumero(numero: number): void;
    ListarTodas(): void;
    Cadastrar(conta: Conta): void;
    Atualizar(conta: Conta): void;
    Deletar(numero: number): void;

    //Métodos Bancários

    Sacar(numero: number, valor: number): void;
    Depositar(numero: number, valor: number): void;
    Transferir(numeroOrigem: number, NumeroDestino: number, valor: number): void;





















}