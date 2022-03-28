export class Jogo {
    id: number = 0;
    nomeJogo: string = "";
    dataLancamento: string = "";
    plataformas: string = "";
    generos: string = "";
    deseenvolvedor: string = "";

    constructor(id:number,nomeJogo:string,dataLancamento:string,plataformas:string,generos:string,deseenvolvedor:string){
        
        this.id = id;
        this.nomeJogo = nomeJogo;
        this.dataLancamento = dataLancamento;
        this.plataformas = plataformas;
        this.generos = generos;
        this.deseenvolvedor = deseenvolvedor;

    }
}