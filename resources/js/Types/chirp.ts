export type ChirpModel = {
    id: number;
    created_at: Date;
    updated_at: Date;
    user: {
        id: number;
        name: string;
    };
    message: string;
};
