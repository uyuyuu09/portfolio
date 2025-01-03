export interface ZennArticle {
    id: number;
    post_type: string;
    title: string;
    slug: string;
    comments_count: number;
    liked_count: number;
    body_letters_count: number;
    article_type: string;
    emoji: string;
    is_suspending_private: boolean;
    published_at: string;
    body_updated_at: string;
    source_repo_updated_at: string | null;
    pinned: boolean;
    path: string;
    user: {
        id: number;
        username: string;
        name: string;
        avatar_small_url: string;
    };
    publication: {
        id: number;
        name: string;
        avatar_url: string;
    } | null;
}

export interface ZennResponse {
    articles: ZennArticle[];
    next_page: string | null;
}
