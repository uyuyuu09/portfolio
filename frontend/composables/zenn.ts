export async function get_Zenn_articles<zenn_response>(
    username: string
): Promise<zenn_response> {
    const config = useRuntimeConfig();
    const { data, error } = await useFetch(
        config.public.ZENN_GET_ARTICLES + username
    );
    return data.value as zenn_response;
}
