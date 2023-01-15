import { ICONS } from '@/configs';
import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './styles.module.css';

const Footer = () => {

  const renderCategory = (title, options) => {
    return (
      <div className={styles['category-footer']}>
        <h5>{title}</h5>
        {options.map((val, key) => (
          <p key={key}>{val}</p>
        ))}
      </div>
    );
  };

  const renderPromo = () => {
    return (
      <div className={[styles.promo, 'row px-5'].join(' ')}>
        <div className="d-flex flex-column justify-content-center col-6">
          <h1 className="col-7">Check our promo today!</h1>
          <p>{`Let's`} see the deals and pick yours!</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end col-6">
          <Button className={styles['btn-promo']} title="See Promo" />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <Image alt="coffee" src={ICONS.COFFEE} />
              <h6>Coffee Shop</h6>
            </div>
            <p className="col-5">{'Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans'}</p>
            <div className="d-flex">
              <Image alt="coffee" src={ICONS.FACEBOOK} />
              <Image alt="coffee" src={ICONS.TWITTER} />
              <Image alt="coffee" src={ICONS.INSTAGRAM} />
            </div>
            <h6 className={styles.copyright}>©2020CoffeeStore</h6>
          </div>
          <div className="col col-lg-2">
            {renderCategory('Product', ['Download', 'Pricing', 'Locations', 'Countries', 'Blog'])}
          </div>
          <div className="col col-lg-2">
            {renderCategory('Engage', ['Coffe Shop ?', 'FAQ', 'About Us', 'Privacy Policy', 'Terms of Service'])}
          </div>
        </div>
        {renderPromo()}
      </div>
    </div>
  );
};

export default Footer;
