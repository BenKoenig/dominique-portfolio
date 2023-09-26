"use client"

import Link from "next/link"

const ProjectItem = ({title, desc}) => {
    return (
        <div href="/" className="bg-gray-700 p-5 rounded-xl p-5 w-full relative gap-2">
            <Link className="absolute text-3xl font-bold top-0 left-0 w-full h-full z-10" href="/"></Link>
            <h2 className="mb-1">{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
            <ProjectItem title={"Project Title"} desc="This is a project description, here comes some short text"/>
            <ProjectItem title={"Project Title"} desc="This is a project description, here comes some short text"/>
            <ProjectItem title={"Project Title"} desc="This is a project description, here comes some short text"/>
            <ProjectItem title={"Project Title"} desc="This is a project description, here comes some short text"/>
        </div>
    )
}

export default Projects