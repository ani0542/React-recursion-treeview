// import React from 'react'
// import TreeNode from './TreeNode'

// function Tree({ data = [] }) {
//     return (
//         <>
//               <div className="d-tree">
                        // <ul className="d-flex d-tree-container flex-column">
                        //     {data.map((tree) => (
                        //        <TreeNode node={tree} />
                        //     ))}
                        // </ul>
//              </div>
//         </>
//     )
// }

// export default Tree





















import React from 'react'
import TreeNode from './TreeNode'
function Tree({data}) {
    return (
        <>
                        <ul className="d-tree-container parent_tree">
                            {data.map((tree) => (
                               <TreeNode node={tree} />
                            ))}
                        </ul>
        </>
    )
}

export default Tree
