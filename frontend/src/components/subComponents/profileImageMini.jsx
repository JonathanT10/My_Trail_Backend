const ProfileImageMini = (props)=>{

    // console.log("img page", props.url);

    return(
        <div className="d-flex p-2 col-example">
            <img src={props.url} alt="" width="270"></img> 
        </div>
    )
}

export default ProfileImageMini;