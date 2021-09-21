
//   export const root = {
//     id: "C",
//     children: [

//       {

//       id: "Program Files",
//       children: [{
//           id: "Adobe",
//           children: [{
//             id: "Adobe Creative Cloud"
//           },
//           {
//             id: "Adobe Illustrator CC"
//           },
//           {
//             id: "Adobe Premiere Pro CC"
//           },
//           {
//             id: "Common",
//             children: [{
//               id: "Plug-ins"
//             }]
//           }]
//         }]
//      },

//     {
//       id: "Users",
//       children:
//        [
//         {
//         id: "Richard",
//         },
//       {
//         id: "defaultuser0"
//       }
//        ]
//     }
//   ],

//   id: "d",
//   children: [

//     {

//     id: "Program Files",
//     children: [{
//         id: "Adobe",
//         children: [{
//           id: "Adobe Creative Cloud"
//         },
//         {
//           id: "Adobe Illustrator CC"
//         },
//         {
//           id: "Adobe Premiere Pro CC"
//         },
//         {
//           id: "Common",
//           children: [{
//             id: "Plug-ins"
//           }]
//         }]
//       }]
//    },

//   {
//     id: "Users",
//     children:
//      [
//       {
//       id: "Richard",
//       },
//     {
//       id: "defaultuser0"
//     }
//      ]
//   }
// ]

//   }
  












  // export const data = {
  //   name: 'Level 1',
  //   items: [{
  //     name: 'Level 2',
  //     items: [{
  //       name: 'Level 3'
  //     }]
  //   }]
  // }































  

  export const treeData = [
    {
      key: "0",
      label: "Documents",
      icon: "fa fa-folder",
      title: "Documents Folder",
      children: [
        {
          key: "0-0",
          label: "Document 1-1",
          icon: "fa fa-folder",
          title: "Documents Folder",
          children: [
            {
              key: "0-1-1",
              label: "Document-0-1.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-2",
              label: "Document-0-2.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-3",
              label: "Document-0-3.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-4",
              label: "Document-0-4.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      icon: "fa fa-desktop",
      title: "Desktop Folder",
      children: [
        {
          key: "1-0",
          label: "document1.doc",
          icon: "fa fa-file",
          title: "Documents Folder",
        },
        {
          key: "0-0",
          label: "documennt-2.doc",
          icon: "fa fa-file",
          title: "Documents Folder",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      icon: "fa fa-download",
      title: "Downloads Folder",
      children: [],
    },
  ];