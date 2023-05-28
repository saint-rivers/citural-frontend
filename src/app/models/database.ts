export interface DatabaseRequest {
    containerName: string;
    vendor: 'postgres' | 'mongodb';
    defaultDatabase: string;
    username: string;
    password: string;
    port: number;
}

