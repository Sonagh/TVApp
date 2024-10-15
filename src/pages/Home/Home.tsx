import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FeaturedVideo from "@/components/FeaturedVideo/FeaturedVideo.tsx";
import data from '@/data.json';
import './Home.scss';

function Home() {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [featuredMovie, setFeaturedMovie] = useState<Movie>(data.Featured);
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        // TODO: fetch data
        const lastSeenMovieId = sessionStorage.getItem('lastSeenMovieId');

        const sortedMovies: Movie[] = data.TendingNow
            .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
            .slice(0, 50);

        if (lastSeenMovieId) {
            const lastSeenMovieIndex = sortedMovies.findIndex(movie => movie.Id === lastSeenMovieId);
            if (lastSeenMovieIndex !== -1) {
                const [lastSeenMovie] = sortedMovies.splice(lastSeenMovieIndex, 1);
                sortedMovies.unshift(lastSeenMovie);
            }
        }

        setTrendingMovies(sortedMovies);
    }, []);

    const handleMovieClick = (movie: Movie) => {
        setFeaturedMovie(movie);
        setPlayVideo(false);
        sessionStorage.setItem('lastSeenMovieId', movie.Id);

        setTimeout(() => {
            setPlayVideo(true);
        }, 500);
    };


    return (
        <>
            {featuredMovie && (
                <FeaturedVideo
                    title={featuredMovie.Title}
                    videoUrl={featuredMovie.VideoUrl}
                    coverImage={`src/assets/images/${featuredMovie.CoverImage}`}
                    titleImage={`src/assets/images/${featuredMovie.TitleImage}`}
                    date={featuredMovie.Date}
                    releaseYear={featuredMovie.ReleaseYear}
                    mpaRating={featuredMovie.MpaRating}
                    category={featuredMovie.Category}
                    duration={featuredMovie.Duration}
                    description={featuredMovie.Description}
                    playVideo={playVideo}
                />
            )}

            <section className="section-trending-now">
                <div className="container-fluid pr-0">
                    <h1 className="section-title">Trending Now </h1>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={8}
                        className="swiper"
                    >
                        {trendingMovies.map(movie => (
                            <SwiperSlide key={movie.Id} onClick={() => handleMovieClick(movie)}>
                                <img src={`src/assets/images/${movie.CoverImage}`} alt={movie.Title}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Home
