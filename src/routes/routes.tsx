import Home from '@/pages/Home/Home';
import TVShows from '@/pages/TVShows/TVShows';
import Movies from '@/pages/Movies/Movies';
import Genres from '@/pages/Genres/Genres';
import WatchLater from '@/pages/WatchLater/WatchLater';

const routes: IRouteConfig[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/tv-shows',
        element: <TVShows />
    },
    {
        path: '/movies/:id',
        element: <Movies />
    },
    {
        path: '/genres',
        element: <Genres />
    },
    {
        path: '/watch-later',
        element: <WatchLater />
    },
];

export default routes;
