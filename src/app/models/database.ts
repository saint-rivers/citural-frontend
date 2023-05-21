export interface DatabaseRequest {
    containerName: string;
    vendor: 'postgres';
    defaultDatabase: string;
    username: string;
    password: string;
    port: number;
}

