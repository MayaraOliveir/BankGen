export class Pessoa {
    // Atributos
    private _nome: string;
    private _idade: number;
    private _altura: number;

    // Método construtor preenchido
    constructor(nome: string, idade: number, altura: number) {
        this._nome = nome;
        this._idade = idade;
        this._altura = altura;
    }

    // método Getter e Setter

public get nome(): string{
    return this._nome;
}

public set nome(nome: string){
    this._nome = nome;
}

    pular(): void{
        console.log(`A pessoa chamada ${this.nome} pulou`);
    }
    
}

const pessoa1 = new Pessoa('Gabriel', 27, 1.85)
pessoa1.pular();
