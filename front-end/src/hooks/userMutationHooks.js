import { useMutation } from '@tanstack/react-query';

export const UserMutationHooks = (fn) => {
    const mutation = useMutation({
        mutationFn: fn
    });
    return mutation
};  