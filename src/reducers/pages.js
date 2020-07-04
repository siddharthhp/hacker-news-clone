// const pagesReducer = (state, action) => {
//     switch (action.type) {
//       case 'POPULATE_PAGE':
//         return action.page
//       case 'UPDATE_PAGE':
//         return state.map(story => {
//           if (story.objectID === action.objectID) {
//             return {...story, points: story.points + 1}
//           } else {
//             return {...story}
//           }
//         })
//       default:
//         return state
//     }
//   }

//   export default storiesReducer
