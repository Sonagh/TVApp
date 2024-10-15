interface Movie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
    VideoUrl?: string;
}

interface IFeaturedVideoProps {
    title: string;
    coverImage: string;
    titleImage: string;
    date: string;
    releaseYear: string;
    mpaRating: string;
    category: string;
    duration: string;
    description: string;
    videoUrl: string;
    playVideo: boolean;
}
