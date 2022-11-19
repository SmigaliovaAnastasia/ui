import { environment } from "../config/environment/environment";
import { ComplexityLevelDto } from "../common/Entities/GameDtos/ComplexityLevelDto";

export class ComplexityLevelService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };


  public async getComplexityLevelById(id: string): Promise<ComplexityLevelDto> {
    const response = await fetch(`${this.apiUrl}/ComplexityLevels/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }


  public async getComplexityLevels(): Promise<ComplexityLevelDto[]> {
    const response = await fetch(`${this.apiUrl}/ComplexityLevels/`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }
}