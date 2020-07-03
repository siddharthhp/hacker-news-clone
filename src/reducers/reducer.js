const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_STORIES':
      return action.hits
    case 'HIDE_STORY':
      return state.filter(note => note.title !== action.title)
    case 'INCREASE_UPVOTE':
      return state.filter(note => note.title !== action.title)
    default:
      return state
  }
}

export default storiesReducer
