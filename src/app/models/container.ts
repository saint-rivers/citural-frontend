export interface ContainerResponse {
    containerName: string[];
    containerId: string;
    status: string;
    ports: Port[];
}

export interface Port {
    IP: string;
    PublicPort: string;
    PrivatePort: string;
}