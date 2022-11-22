import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Rocket from '../assets/tmg-facebook_social.jpg';
import { fetchRockets } from '../Redux/rockets/rockets';
/* eslint-disable */
const Rockets = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  
  return (
    <div className="rocket">
      {coins.map(({id, name, description, images, type,}) => (
  
      <div className="rocketDiv">
        <div key={id}>
          <img src={images[0]} className="rocketImg" alt="" />
        </div>
        <div className="rocketDivSm">
          <h2>{name}</h2>
          <p>
            {description}
          </p>
          <button type="button" className="rocketBtn">Reserve Rocket</button>
        </div>
      </div>
      ))};
      <h2>gfgfgff</h2>
      {/* <div className="rocketDiv">
        <div>
          <img src={Rocket} className="rocketImg" alt="" />
        </div>
        <div className="rocketDivSm">
          <h2>Falcon</h2>
          <p>
            I am a very handsome boy, LOL, I meant ugly, yeah, I am really ugly...
            I love life and I am very optimistic about the future :)... Life is good
          </p>
          <button type="button" className="rocketBtn">Reserve Rocket</button>
        </div>
      </div>
      <div className="rocketDiv">
        <div>
          <img src={Rocket} className="rocketImg" alt="" />
        </div>
        <div className="rocketDivSm">
          <h2>Falcon</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veniam
            iure consectetur fugit! Quod voluptatibus porro
            illum neque iure. Cupiditate et aliquid facere eius veniam rem
            molestiae dolorem fugiat dolores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis explicabo
            eaque animi tenetur eius a debitis ex alias iusto amet
            quasi voluptas, obcaecati sequi non eligendi fugit aperiam odit.
          </p>
          <button type="button" className="rocketBtn">Reserve Rocket</button>
        </div>
      </div>
      <div className="rocketDiv">
        <div>
          <img src={Rocket} className="rocketImg" alt="" />
        </div>
        <div className="rocketDivSm">
          <h2>Falcon</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veniam
            iure consectetur fugit! Quod voluptatibus porro
            illum neque iure. Cupiditate et aliquid facere eius veniam rem
            molestiae dolorem fugiat dolores?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis explicabo
            eaque animi tenetur eius a debitis ex alias iusto amet
            quasi voluptas, obcaecati sequi non eligendi fugit aperiam odit.
          </p>
          <button type="button" className="rocketBtn">Reserve Rocket</button>
        </div>
      </div> */}
    </div>
  );
};

export default Rockets;