const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_STORIES':
      return action.hits
    case 'INCREASE_UPVOTE':
      return state.map(story => {
        if (story.objectID === action.objectID) {
          return {...story, points: story.points + 1}
        } else {
          return {...story}
        }
      })
    case 'HIDE_ELEMENT':
      return state.filter(story => story.objectID !== action.objectID)
    default:
      return state
  }
}

export default storiesReducer
