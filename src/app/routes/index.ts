import { Router } from "express";

import { AuthRoutes } from "../modules/Auth/auth.routes";
import { ProjectRoutes } from "../modules/Project/project.routes";
import { BlogRoutes } from "../modules/Blogs/blog.routes";
import { SkillRoutes } from "../modules/Skill/skill.routes";
import { ExperienceRoutes } from "../modules/Experience/experience.routes";


const router = Router();

const moduleRoutes = [

    {
        path: "/auth",
        route: AuthRoutes,
    },

    {
        path: "/project",
        route: ProjectRoutes,
    },
    {
        path: "/blog",
        route: BlogRoutes,
    },
    {
        path: "/skill",
        route: SkillRoutes,
    },
    {
        path: "/experience",
        route: ExperienceRoutes,
    }


]


moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
});


export default router;


