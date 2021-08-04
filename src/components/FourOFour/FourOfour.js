import img1 from '../../assets/images/img1.svg'
import './style.css'
import ReactAnime from 'react-animejs'
const FourOfour = () => {
    const { Anime, stagger } = ReactAnime
    return (

        <div className="aa">
            <Anime initial={[
                {
                    targets: '#zero',
                    translateX: 10,
                    autoplay: true,
                    loop: true,
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
                    rotateY: { value: '+=180', delay: 200 },
                }
            ]}>
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwia06DIhYbyAhWSWHwKHVp9AbgQFjAKegQICxAD&url=https%3A%2F%2Fwww.ftcab.com%2Fjamshedpur-to-patna-taxi.aspx&usg=AOvVaw0fcbgYSzZksEARY6BI9s8Q" target="_blank">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 mt-5 mb-5">
                                <img src={img1} alt="img1" />
                            </div>
                        </div>
                    </div>
                </a>
            </Anime>
        </div>
    );
};
export default FourOfour;