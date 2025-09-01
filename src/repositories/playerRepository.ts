import { PlayerModel } from "../models/playerModel";
import { HttpResponse } from "../utils/HttpResponse";

let playerDatabaseTable: PlayerModel[] = [
  {
    id: 1,
    name: "Estêvão",
    club: "Palmeiras",
    jerseyNumber: 9,
    statistics: {
      speed: 92,
      accuracy: 88,
      dribbling: 95,
      physicality: 75,
      defending: 50
    }
  },
  {
    id: 2,
    name: "Arrascaeta",
    club: "Flamengo",
    jerseyNumber: 14,
    statistics: {
      speed: 80,
      accuracy: 90,
      dribbling: 89,
      physicality: 65,
      defending: 60
    }
  },
  {
    id: 3,
    name: "Kaio Jorge",
    club: "Cruzeiro",
    jerseyNumber: 11,
    statistics: {
      speed: 88,
      accuracy: 85,
      dribbling: 82,
      physicality: 80,
      defending: 55
    }
  },
  {
    id: 4,
    name: "Vegetti",
    club: "Vasco da Gama",
    jerseyNumber: 19,
    statistics: {
      speed: 86,
      accuracy: 87,
      dribbling: 84,
      physicality: 78,
      defending: 50
    }
  },
  {
    id: 5,
    name: "Gerson",
    club: "Flamengo",
    jerseyNumber: 8,
    statistics: {
      speed: 76,
      accuracy: 88,
      dribbling: 82,
      physicality: 75,
      defending: 70
    }
  },
  {
    id: 6,
    name: "Pedro",
    club: "Flamengo",
    jerseyNumber: 9,
    statistics: {
      speed: 75,
      accuracy: 90,
      dribbling: 80,
      physicality: 85,
      defending: 60
    }
  },
  {
    id: 7,
    name: "Vitor Roque",
    club: "Palmeiras",
    jerseyNumber: 10,
    statistics: {
      speed: 90,
      accuracy: 86,
      dribbling: 88,
      physicality: 70,
      defending: 55
    }
  },
  {
    id: 8,
    name: "Memphis Depay",
    club: "Corinthians",
    jerseyNumber: 7,
    statistics: {
      speed: 84,
      accuracy: 87,
      dribbling: 85,
      physicality: 80,
      defending: 50
    }
  },
  {
    id: 9,
    name: "Neymar",
    club: "Santos",
    jerseyNumber: 10,
    statistics: {
      speed: 91,
      accuracy: 92,
      dribbling: 95,
      physicality: 70,
      defending: 45
    }
  },
  {
    id: 10,
    name: "Yuri Alberto",
    club: "Corinthians",
    jerseyNumber: 9,
    statistics: {
      speed: 85,
      accuracy: 88,
      dribbling: 80,
      physicality: 82,
      defending: 55
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return playerDatabaseTable;
}

export const findPlayerByID = async (id: number): Promise<PlayerModel | undefined> => {
  return playerDatabaseTable.find(player => player.id==id);
}

export const insertPlayer = async (player: PlayerModel) => {
  player.id = autoIncrementID();
  playerDatabaseTable.push(player);
}

export const deletePlayer = async (id: number) : Promise<HttpResponse> => {
  const index = playerDatabaseTable.findIndex( player => player.id === id);
  if(index === -1) return {statusCode: 404, body: "Player not found"}
  else{
  const name = playerDatabaseTable[index].name;
  playerDatabaseTable.splice(index, 1);
  return {statusCode: 200, body: `Player ${name} deleted`}
  }

}

export const updatePlayerByID = async (id: number, player: PlayerModel): Promise<HttpResponse> => {
  const index = playerDatabaseTable.findIndex( player => player.id === id);

  player.id = index + 1;
  playerDatabaseTable[index] = player;
  const name = player.name
  return  {statusCode: 200, body: `Player ${name} updated`}
}

function autoIncrementID(){
  const maxId = playerDatabaseTable.reduce((max, player) => player.id > max ? player.id : max, 0);
  return maxId + 1;
}