export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [...state.friends, action.friend]
      });
    case 'REMOVE_FRIEND':
      var friends = [...state.friends];
      var i = 0;
      friends.forEach((friend, index) => {
        if(friend.id === action.id){
          i = index;
          return;
        }
      });
      friends.splice(i, 1);
      return Object.assign({}, state, {
        friends: friends
      });
    default:
      return state;
  }
}
