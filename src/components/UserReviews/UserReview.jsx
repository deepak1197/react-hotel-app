const UserReviews = (props) => {

    return (
        <div className="userreview">
            <p className="userreview__text">
                <span className="userreview__text--rating">{props.usersRating}</span> based on {props.userReviewCount} reviews.</p>
        </div>
    );
  }
  
  export default UserReviews;