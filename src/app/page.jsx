import Button from '@/components/elements/Button';
import Footer from '@/components/elements/Footer';
import Header from '@/components/elements/Header';
import Image from 'next/image';
import Title from '@/components/elements/Title';
import { ICONS, IMAGES } from '@/configs';
import styles from './styles.module.css';

const dataTesti = [
  {
    id: '1',
    image: IMAGES.PERSON1,
    location: 'Warsaw, Poland',
    name: 'Viezh Robert',
    testi: '“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!'
  },
  {
    id: '2',
    image: IMAGES.PERSON2,
    location: 'Shanxi, China',
    name: 'Yessica Christy',
    testi: '“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte'
  },
  {
    id: '3',
    image: IMAGES.PERSON3,
    location: 'Seoul, South Korea',
    name: 'Kim Young Jou',
    testi: '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!'
  },
];

export default function Home() {

  const renderSummary = (icon, count, type) => {
    return (
      <div className={['d-flex justify-content-center align-items-center', styles['summary-card']].join(' ')}>
        <div className={styles.icon}>
          <Image alt="user" src={icon} />
        </div>
        <div>
          <h3 className={styles.count}>{count}</h3>
          <p className={styles.type}>{type}</p>
        </div>
      </div>
    );
  };

  const renderFavorite = (image, name, desc, price) => {
    return (
      <div className={[styles['card-favorite'], 'd-flex flex-column justify-content-between align-items-center'].join(' ')}>
        <div>
          <div className={styles['image-favorite-parent']}>
            <Image alt={name} className={styles['image-favorite']} src={image} />
          </div>
          <h6>{name}</h6>
          {desc.map(val => (
            <div className="d-flex mb-2" key={val}>
              <Image alt="check" src={ICONS.CHECK} />
              <p className="m-0 ms-2">{val}</p>
            </div>
          ))}
        </div>
        <div>
          <h1>IDR {price}</h1>
          <Button className={styles['btn-order']} title="Order Now" />
        </div>
      </div>
    );
  };

  const renderCardTesti = (image, name, location, testi, id) => {
    return (
      <div className={styles['card-testi']} key={id}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Image alt={name} className={styles['testi-image']} src={image} />
            <div className="d-flex flex-column ms-3">
              <h6>{name}</h6>
              <p>{location}</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="m-0 me-2">4.5</p>
            <Image alt="star" src={ICONS.STAR} />
          </div>
        </div>
        <p className={styles.desc}>{testi}</p>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <Title title="Coffee Shop" />
      <Header />
      <section className={styles.jumbotron}>
        <div className="container">
          <div className="row">
            <h1 className="col-lg-6">Start Your Day with Coffee and Good Meals</h1>
          </div>
          <div className="row">
            <p className="col-lg-5">{'We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!'}</p>
          </div>
          <Button className={styles['btn-get-started']} title="Get Started" />
          <div className="styles.summary">
            {renderSummary(ICONS.USER, '90+', 'Staff')}
            {renderSummary(ICONS.LOCATION, '30+', 'Stores')}
            {renderSummary(ICONS.LOVE, '800+', 'Customers')}
          </div>
        </div>
      </section>
      <section className={styles['team-work']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <Image alt="teamwork" src={IMAGES.TEAMWORK} />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h1>We Provide Good Coffee and Healthy Meals</h1>
              <p>{'You can explore the menu that we provide with fun and have their own taste and make your day better.'}</p>
              <div className="d-flex mb-3">
                <Image alt="teamwork" src={ICONS.CHECKCIRCLE} />
                <p className="m-0 ms-2 text-14">High quality beans</p>
              </div>
              <div className="d-flex mb-3">
                <Image alt="teamwork" src={ICONS.CHECKCIRCLE} />
                <p className="m-0 ms-2 text-14">Healthy meals, you can request the ingredients</p>
              </div>
              <div className="d-flex mb-3">
                <Image alt="teamwork" src={ICONS.CHECKCIRCLE} />
                <p className="m-0 ms-2 text-14">Chat with our staff to get better experience for ordering</p>
              </div>
              <div className="d-flex mb-3">
                <Image alt="teamwork" src={ICONS.CHECKCIRCLE} />
                <p className="m-0 ms-2 text-14">Free member card with a minimum purchase of IDR 200.000.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={[styles.favorite, 'container'].join(' ')}>
        <h1>Here is People’s Favorite</h1>
        <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        <div className={['d-flex justify-content-between w-full', styles['favorite-card-container']].join(' ')}>
          {renderFavorite(IMAGES.FOOD1, 'Hazelnut Latte', ['HazelnutSyrup', 'Wanilla Whipped Cream', 'Ice / Hot', 'Sliced Banana on Top'], '25.000')}
          {renderFavorite(IMAGES.FOOD2, 'Pinky Promise', ['1 Shot of Coffee', 'Vanilla Whipped Cream', 'Chocolate Biscuits', 'Strawberry Syrup', 'Sliced strawberry on Top'], '30.000')}
          {renderFavorite(IMAGES.FOOD3, 'Chicken Wings', ['Wings', 'Drum Sticks', 'Mayonaise and Lemon', 'Hot Fried', 'Secret Recipe', 'Buy 1 Get 1 only for Dine in'], '40.000')}
        </div>
      </section>
      <section className={[styles.visit, 'container'].join(' ')}>
        <h1>Visit Our Store in the</h1>
        <h1>Spot on the Map Below</h1>
        <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
        <div className={styles['peta-image']}>
          <Image alt="peta" src={IMAGES.PETA} />
        </div>
      </section>
      <section className={styles.partner}>
        <div className="container">
          <h1>Our Partner</h1>
          <div className="row align-items-center">
            <div className="col">
              <Image alt="netflix" src={IMAGES.NETFLIX} />
            </div>
            <div className="col">
              <Image alt="reddit" src={IMAGES.REDDIT} />
            </div>
            <div className="col">
              <Image alt="amazon" src={IMAGES.AMAZON} />
            </div>
            <div className="col">
              <Image alt="discord" src={IMAGES.DISCORD} />
            </div>
            <div className="col">
              <Image alt="spotify" src={IMAGES.SPOTIFY} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testi}>
        <div className="container">
          <h1 className="text-center">Loved by Thousands of</h1>
          <h1 className="text-center">Happy Customer</h1>
          <p className="text-center">These are the stories of our customers who have visited us with great pleasure.</p>
          <div className={['d-flex', styles['testi-card-container']].join(' ')}>
            {dataTesti.map(val => (
              renderCardTesti(val.image, val.name, val.location, val.testi, val.id)
            ))}
          </div>
          <div className={[styles.slide, 'd-flex justify-content-between align-items-center'].join(' ')}>
            <div className="d-flex">
              <div className={styles['active-circle-slide']} />
              <div className={styles['circle-slide']} />
            </div>
            <div className="d-flex">
              <div className={styles['arrow-left']}>
                <Image alt="arrow left" src={ICONS.ARROWLEFTBRWON} />
              </div>
              <div className={styles['arrow-right']}>
                <Image alt="arrow right" src={ICONS.ARROWRIGHTWHITE} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
