// import {useState} from 'react';

const FriendsList = (props)=>{
    const user = props.props;
    // console.log(user);
    // console.log(user.friendsList);
    // console.log(user.pendingFriends);
    
    // const [text, setText] = useState('');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    //   };

    // const handleClick =()=>{
    //     const newComment={
    //     }
    //     props.addNewComment(newComment);
    //     setText('');
    // }

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