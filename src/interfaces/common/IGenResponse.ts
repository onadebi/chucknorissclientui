interface GenResponse<T> {
    isSuccess: boolean;
    data: T;
    message: string;
}

export default GenResponse;
