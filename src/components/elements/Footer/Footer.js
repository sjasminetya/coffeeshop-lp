import { ICONS } from '@/configs';
import React from 'react';
import Button from '../Button';
import Image from 'next/image';
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
      <div className={[styles.promo, 'px-5'].join(' ')}>
        <div className={['d-flex flex-column justify-content-center', styles['promo-text']].join(' ')}>
          <h1>Check our promo today!</h1>
          <p>{`Let's`} see the deals and pick yours!</p>
        </div>
        <Button className={styles['btn-promo']} title="See Promo" />
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
            <div className="d-flex w-full">
              <div className="me-2">
                <Image alt="facebook" src={ICONS.FACEBOOK} />
              </div>
              <div className="me-2">
                <Image alt="twitter" src={ICONS.TWITTER} />
              </div>
              <div className="me-2">
                <Image alt="instagram" src={ICONS.INSTAGRAM} />
              </div>
            </div>
            <h6 className={styles.copyright}>©2020CoffeeStore</h6>
          </div>
          <div className="col-sm-4 col-lg-2">
            {renderCategory('Product', ['Download', 'Pricing', 'Locations', 'Countries', 'Blog'])}
          </div>
          <div className="col-sm-4 col-lg-2">
            {renderCategory('Engage', ['Coffe Shop ?', 'FAQ', 'About Us', 'Privacy Policy', 'Terms of Service'])}
          </div>
        </div>
        {renderPromo()}
      </div>
    </div>
  );
};

export default Footer;
