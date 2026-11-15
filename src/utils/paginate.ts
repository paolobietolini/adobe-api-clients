export type Page<T> = { items: T[], hasMore: boolean};
export async function* paginate<T>(
    fetchPage: (page:number) => Promise<Page<T>>,
    { start = 0, maxPages = Infinity } = {}
): AsyncGenerator<T>{
    for (let page = start, n = 0; n < maxPages; page++, n++) {
        const { items, hasMore} = await fetchPage(page);
        yield* items;
        if (!hasMore || items.length === 0) return;
    }
}