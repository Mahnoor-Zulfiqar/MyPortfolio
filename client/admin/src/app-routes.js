import { HomePage, TasksPage, ProfilePage, EducationPage, ExperiencePage, SkillPage,ProjectPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/education',
        element: EducationPage
    },
    {
        path: '/experience',
        element: ExperiencePage
    },
    {
        path: '/skills',
        element: SkillPage
    },
    {
        path: '/projects',
        element: ProjectPage
    },
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
