import { ICONS } from '@/configs';
import React from 'react';
import Button from '../Button';
import Image from 'next/image';
import styles from './styles.module.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="d-flex align-items-center">
          <Image alt="coffee" height={33} src={ICONS.COFFEE} />
          <h3 className={styles['navbar-brand']}>Coffee Shop</h3>
        </div>
        <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarNavDropdown" data-bs-toggle="collapse" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
          <div />
          <ul className="navbar-nav">
            <li className="nav-item">
              <h6 className={['nav-link', styles['nav-link-custom'], styles['nav-link-active']].join(' ')}>Home</h6>
            </li>
            <li className="nav-item">
              <h6 className={['nav-link', styles['nav-link-custom']].join(' ')}>Product</h6>
            </li>
            <li className="nav-item">
              <h6 className={['nav-link', styles['nav-link-custom']].join(' ')}>Orders</h6>
            </li>
            <li className="nav-item">
              <h6 className={['nav-link', styles['nav-link-custom']].join(' ')}>Dashboard</h6>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <h4 className={styles['text-login']}>Login</h4>
            <Button className={styles['btn-sign-up']} title="Sign Up" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
