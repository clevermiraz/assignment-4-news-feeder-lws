// import { createContext, useReducer } from "react";
// import { tasksList } from "../data/taskList";
// import taskReducer from "../reducers/taskReducer";

// export const FilterContext = createContext(null);
// export const FilterDispatchContext = createContext(null);

// export default function TasksProvider({ children }) {
//     const [tasks, dispatch] = useReducer(taskReducer, tasksList);

//     return (
//         <TasksContext.Provider value={tasks}>
//             <TasksDispatchContext.Provider value={dispatch}>
//                 {children}
//             </TasksDispatchContext.Provider>
//         </TasksContext.Provider>
//     );
// }
