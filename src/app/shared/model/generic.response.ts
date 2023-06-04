export interface ApiResponse<T> {
    payload: T;
    message: string;
}

export interface PagedResponse<T> {
    payload: T;
    pageCount: number;
}