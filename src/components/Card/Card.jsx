import ImageBox from '../ImageBox/ImageBox';
import StarsRating from 'stars-rating'
import UserReviews from '../UserReviews/UserReview';

const Card = (props) => {

  return (
        <div className="card">
            <ImageBox image={props.image} alt={props.title}/>
            <div className="card__body">
            <h5 className="card__title">{props.title}</h5>
            <StarsRating
              edit={false}
              count={10}
              value={props.starsRating}
            />
            <p className="card__subtitle">{props.location}</p>
            <hr/>
            <UserReviews usersRating={props.usersRating} userReviewCount={props.userReviewCount}/>
            <div>
              <h6 className='card__subtitle--small card__subtitle--small--italic'>Price includes:</h6>
              {
                props.servicesIncluded.map(service => (
                  <p key={service.id+100*Math.random()} className="card__subtitle--small">
                    {service.description}
                  </p>
                ))
              }
            </div>
            <hr />
            <div className='card__footer'>
              <div className='card__footer--inner'>
                <p className='card__footer--inner-text'>Total price from:</p>
                <h5 className='card__footer--main-text'>{props.currencySymbol}{props.price}</h5>
                <p className='card__footer--inner-text'>Per Person: {props.currencySymbol}{props.pricePerPerson}</p>
              </div>
              <div className='card__footer--inner'>
                <button className="card__btn--large">View More</button>
              </div>
            </div>
            </div>
        </div>
  );
}

export default Card;
