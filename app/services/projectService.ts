import { projects } from "@data/projects";
import { Project } from "@types";

export const fetchProjects = async () => projects;

export const fetchProjectById = async (id: string) =>
  projects.find((project) => project.id === id);

export const createProject = async (_project: Project): Promise<boolean> => {
  void _project;
  throw new Error("Project creation is unavailable: no project API is configured.");
};

export const updateProject = async (_id: string, _updatedProject: Project) => {
  void _id;
  void _updatedProject;
  throw new Error("Project updates are unavailable: no project API is configured.");
};

export const deleteProjectById = async (_id: string) => {
  void _id;
  throw new Error("Project deletion is unavailable: no project API is configured.");
};
