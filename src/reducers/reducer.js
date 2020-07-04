const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_STORIES':
      return action.hits
    case 'HIDE_STORY':
      return state.filter(story => story.objectId !== action.title)
    case 'INCREASE_UPVOTE':
      return state.filter(story => story.title !== action.title)
    default:
      return state
  }
}

export default storiesReducer
