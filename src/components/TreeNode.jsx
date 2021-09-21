// import React, { useState } from 'react'
// import Tree from './Tree';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// function TreeNode({ node }) {
//     const [childVisible, setChildVisiblity] = useState(false);
//     const hasChild = node.children ? true : false;

//     return (
//         <>
//               <li className="d-tree-node border-0">
//               <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
                  // {hasChild && (
                  // <div
                  //     // className={`d-inline d-tree-toggler ${
                  //     // childVisible ? "active" : ""
                  //     // }`}
                  // >
                  //     <FontAwesomeIcon icon="caret-right" />
                  // </div>
                  // )}
// {/* d-tree-head */}
              // <div className="col ">
              //   <i className={`mr-1 ${node.icon}`}> </i>
              //   {node.label}
              // </div>
//             </div>

  //  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', left: 25, borderLeft: '1px solid', paddingLeft: 15 }}>
  //     {hasChild && childVisible && (
  //       <div className="d-tree-content">
  //         <ul className="d-flex d-tree-container flex-column">
  //           <Tree data={node.children} />
  //         </ul>
  //       </div>
  //     )}
  //   </div>
//     </li>
//         </>
//     )
// }

// export default TreeNode


















import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// IoMdArrowDropright
import { IoMdArrowDropright } from 'react-icons/io';
import Tree from './Tree';

function TreeNode({ node }) {
  // console.log(node)

  const [childVisible, setChildVisiblity] = useState(false);
  const hasChild = node.children ? true : false;
  // console.log(hasChild)

  return (
    <>
      <li className="d-tree-node">
           <div className='item_flex' onClick={(e) => setChildVisiblity((v) => !v)}>
                 {hasChild && (
                  <div className=''>
                      <IoMdArrowDropright className='arrows'/>
                  </div>
                  )}
                  <div className='node_label'>
                         
                           <i className={`mr-1 ${node.icon}`}> </i>
                           <span className='label_space'>{node.label}</span>
                           
                  </div>
           </div>


         {/* //base point of recursion */}
           <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', left: 25, borderLeft: '1px solid', paddingLeft: 15 }}>
                {hasChild && childVisible && (
                  <div >
                    <ul className="parent_tree d-tree-container">
                      <Tree data={node.children} />
                    </ul>
                  </div>
                 )}
           </div>


      </li>
    </>
  )
}

export default TreeNode

