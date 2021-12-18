type friend = {
    name : string ;
    approved : bool;
  }

type storage = {
  friends : friend list;
  tezAddress : address;
}

//add friend to list of friends
let addFriend (name,oldState : string*storage) =
    let reqSender = sender in
    if reqSender = oldState.tezAddress
    then 
      let newFriends:(friend list) = 
      { name = name; approved = true } :: oldState.friends in
      let newState:storage = { friends = newFriends; tezAddress = oldState.tezAddress } in
      ( ([]:operation list) , newState )
    else 
      ( ([]:operation list) , oldState ) 


//Remove friend from list of friends
let removeFriend (name,oldState : string*storage) =
    let reqSender = sender in
    if reqSender = oldState.tezAddress
    then 
      let newFriends:(friend list) = 
      { name = name; approved = false } :: oldState.friends in
      let newState:storage = { friends = newFriends; tezAddress = oldState.tezAddress } in
      ( ([]:operation list) , newState )
    else 
      ( ([]:operation list) , oldState ) 
