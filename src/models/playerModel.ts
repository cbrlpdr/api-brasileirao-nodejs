export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  jerseyNumber: number;
  statistics: {
    speed: number;
    accuracy: number; 
    dribbling: number;
    physicality: number;
    defending: number;
  }
}
