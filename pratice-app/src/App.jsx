import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NoProjectSelected from "./components/NoProjectedSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const[projectsState,setProjectsState]=useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[],

  });
  function handleAddTask(text){
    setProjectsState((prevState)=>{
      const taskId=Math.random();
      const newTask={
       text:text,
       projectId:prevState.SelectedProjectId,
       id:taskId
      }
       return {
         ...prevState,
        tasks:[newTask,...prevState.tasks]
       }
     });
  }
  function handleDeleteTask(id){
    setProjectsState((prevState)=>{
      return{
        ...prevState,

        tasks:prevState.tasks.filter((task)=>task.id!==id)
      }
  
    });
  }
  function handleSelectProject(id){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:id,
      }

    });
  }
  function handleStartProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }

    });
  }
  function handleCancelAddProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      }

    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
     const newProject={
      ...projectData,
      id:Math.random()
     }
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    });
}
function handleDeleteProject(){
  setProjectsState((prevState)=>{
    return{
      ...prevState,
      selectedProjectId:undefined,
      projects:prevState.projects.filter((project)=>project.id!==prevState.selectedProjectId)
    }

  });
}
 const selectedProject=projectsState.projects.find(project=>project.id===projectsState.selectedProjectId)

  let content=<SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}

  >
 
  </SelectedProject>;

  if(projectsState.selectedProjectId===null) {
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;

  }else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartProject}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSideBar 
     onStartAddProject={handleStartProject} 
     projects={projectsState.projects}
     onSelectProject={handleSelectProject}
     selectedProjectId={projectsState.selectedProjectId}
     />
     {content}
    </main>
  );
}

export default App;
