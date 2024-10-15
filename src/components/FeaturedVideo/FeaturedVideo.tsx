import React, {useEffect, useRef} from "react";
import './FeaturedVideo.scss';
import {convertMinutesToHoursAndMinutes} from "@/helpers/helperFunctions";

const FeaturedVideo: React.FC<IFeaturedVideoProps> = ({
         playVideo,
         title,
         coverImage,
         titleImage,
         releaseYear,
         mpaRating,
         category,
         duration,
         description,
         videoUrl
     }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (playVideo && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Error playing video:", error);
            });        }

        console.log(playVideo)
    }, [playVideo]);

    const formattedDuration = convertMinutesToHoursAndMinutes(duration);

    return (
        <div className="featured-video">
            <div className="container-fluid">
                <p className="category">{category}</p>
                <img src={titleImage} alt={title} className="title"/>

                <div className="info">
                    <span className="release-year">{releaseYear}</span>
                    <span className="mpa-rating">{mpaRating}</span>
                    <span className="duration">{formattedDuration}</span>
                </div>
                <p className="description">{description}</p>

                <div className="d-flex align-items-center">
                    <button className="btn btn-play">
                        <i className="icon-play"/>
                        Play
                    </button>
                    <button className="btn btn-more">More Info</button>
                </div>
            </div>

            {/*{showVideo && (*/}
                <video ref={videoRef} className="background-video" autoPlay muted loop poster={coverImage}>
                    <source src={videoUrl} type="video/mp4"/>
                </video>
            {/*)}*/}
        </div>
    );
};

export default FeaturedVideo;