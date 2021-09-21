
// import React from 'react'
// import Tree from './components/Tree'
// import {treeData} from "./components/data"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./components/FontAwesomeIcons";
// import "./styles/main.css"
// function App() {
//     return (
//         <>
//               <div className="row">
//                     <div className="col text-center">
//                          <h2>Tree Visualization component</h2>
//                          <p className="mt-3">
//                                 {/* <div className="row mt-3 d-flex justify-content-center"> */}
//                                     {/* <div className="col-lg-8 text-left text-dark"> */}
//                                         <Tree data={treeData} />
//                                     {/* </div> */}
//                                 {/* </div> */}
//                         </p>
//                     </div>
//              </div>
//         </>
//     )
// }

// export default App






import React from 'react'
import Tree from './components/Tree'
import {treeData} from "./components/data"
import "./styles/main.css"
function App() {
    return (
        <>
                    <div class="heading">
                       <h2>Tree Visualization component</h2>   
                       <p>
                           <Tree data={treeData} />
                       </p> 
                    </div>
        </>
    )
}

export default App




































// import React from 'react'
// import File from "./components/File"
// // import { root } from './components/data';
// import {treeData} from "./components/data"
// function App() {

//     // @URL
//     // https://dev.to/knowit-development/recursive-components-in-react-37ka#:~:text=%20Recursive%20components%20in%20React%20%201%20Recursion.,achieve%20the%20same%20results%20by%20just...%20More%20
    
//     return (
//         <>
//              <div style={{ marginLeft: 15 }}>
//                   <File {...treeData}/>
//               </div>
//         </>
//     )
// }

// export default App






// import React from 'react'
// import RecursiveComponent from './components/RecursiveComponent'
// import {data} from "./components/data"
// function App() {
//     return (
//         <>
//             <RecursiveComponent  {...data}/>
//         </>
//     )
// }

// export default App







