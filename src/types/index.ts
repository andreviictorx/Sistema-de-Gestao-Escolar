export interface Aluno {
    matricula: string;
    nome: string;
    id: number;
    turma: string; 
}

export interface Disciplina{
    codigo:string,
    cargaHoraria:string,
    nome:string,
    id:number,
    turma: string;
};


export interface Professor {
  nome: string;
  area: string;
  matricula: string;
  id: number;
  turma: string;
};

export interface Turma {
    id:number,
    codigo: string;
    nome: string;
    ano: string;
}