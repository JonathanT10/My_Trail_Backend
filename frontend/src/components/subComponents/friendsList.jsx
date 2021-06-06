const FriendsList = (props)=>{
    const user = props.props;
    return(
    <div>
        <h5>
        Friends List
          <p>{user.friendsList}</p>
        </h5>
        <h5> 
             Pending Friends
       <p>{user.pendingFriends}</p> 
        </h5>
    </div>
    )
}

export default FriendsList;