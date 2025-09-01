import { Club } from "../models/clubModel";

const clubsDatabaseTable: Club[] = [
  { id: 1, name: "Atlético-MG", state: "MG", coach: "Cuca" },
  { id: 2, name: "Bahia", state: "BA", coach: "Rogério Ceni" },
  { id: 3, name: "Botafogo", state: "RJ", coach: "Renato Paiva" },
  { id: 4, name: "Ceará", state: "CE", coach: "Léo Condé" },
  { id: 5, name: "Corinthians", state: "SP", coach: "Dorival Júnior" },
  { id: 6, name: "Cruzeiro", state: "MG", coach: "Leonardo Jardim" },
  { id: 7, name: "Flamengo", state: "RJ", coach: "Filipe Luís" },
  { id: 8, name: "Fluminense", state: "RJ", coach: "Renato Gaúcho" },
  { id: 9, name: "Fortaleza", state: "CE", coach: "Juan Pablo Vojvoda" },
  { id: 10, name: "Grêmio", state: "RS", coach: "Mano Menezes" },
  { id: 11, name: "Internacional", state: "RS", coach: "Roger Machado" },
  { id: 12, name: "Juventude", state: "RS", coach: "Cláudio Tencati" },
  { id: 13, name: "Mirassol", state: "SP", coach: "Ivan Baitello" },
  { id: 14, name: "Palmeiras", state: "SP", coach: "Abel Ferreira" },
  { id: 15, name: "Red Bull Bragantino", state: "SP", coach: "Fernando Seabra" },
  { id: 16, name: "Santos", state: "SP", coach: "Cléber Xavier" },
  { id: 17, name: "São Paulo", state: "SP", coach: "Luis Zubeldía" },
  { id: 18, name: "Sport Recife", state: "PE", coach: "António Oliveira" },
  { id: 19, name: "Vasco da Gama", state: "RJ", coach: "Fernando Diniz" },
  { id: 20, name: "Vitória", state: "BA", coach: "Thiago Carpini" },
];

export const returnAllClubs = () => {
    return clubsDatabaseTable;
}

export const findClubByID = (id: number) => {
    return clubsDatabaseTable.find((club) => club.id == id);
}