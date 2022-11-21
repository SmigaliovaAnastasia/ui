import { environment } from "../config/environment/environment";
import { GameListDto } from "../common/Entities/GameDtos/GameListDto";
import { GameDto } from "../common/Entities/GameDtos/GameDto";
import { PagedRequest } from "../common/Models/PagedRequest/PagedRequest";
import { PagedResult } from "../common/Models/PagedRequest/PagedResult";
import { GameCreateUpdateDto } from "../common/Entities/GameDtos/GameCreateUpdateDto";
import { GetJwt } from "./Utils/GetJwt";
import { ReviewDto } from "../common/Entities/ReviewDtos/ReviewDto";
import { ReviewCreateDto } from "../common/Entities/ReviewDtos/ReviewCreateDto";
import { ReviewUpdateDto } from "../common/Entities/ReviewDtos/ReviewUpdateDto";

export class ReviewService {
  private apiUrl: string;
  constructor() {
    this.apiUrl = environment.apiUrl;
  };


  public async getReviewById(id: string): Promise<ReviewDto> {
    const response = await fetch(`${this.apiUrl}/Reviews/${id}`);
    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }


  public async GetPagedReviews(pagedRequest: PagedRequest): Promise<PagedResult<ReviewDto>> {
    const response = await fetch(`${this.apiUrl}/Reviews/paginated`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pagedRequest)
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }


  public async AddReview(review: ReviewCreateDto): Promise<ReviewDto> {
    const jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Reviews/`, {
      method: 'POST',
      headers: jwt,
      body: JSON.stringify(review)
    });

    const data = await response.json();
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve(data);
    }
  }

  public async UpdateReview(id : string, review: ReviewUpdateDto): Promise<void> {
    const jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Reviews/${id}`, {
      method: 'PUT',
      headers: jwt,
      body: JSON.stringify(review)
    });

    const data = await response;
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve();
    }
  }

  public async DeleteReview(id : string): Promise<void> {
    const jwt = GetJwt();
    const response = await fetch(`${this.apiUrl}/Reviews/${id}`, {
      method: 'DELETE',
      headers: jwt,
    });

    const data = await response;
    if (!response.ok) {
      const error = data || response.statusText;
      return Promise.reject(error);
    }
    else {
      return Promise.resolve();
    }
  }
}