import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import styles from '../../styles/DashboardSidebar.module.css'; // Import styles from the CSS module

function DashboardSidebar() {
 const [isVisible, setIsVisible] = useState(false);

 const toggleSidebar = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <div style={{ position: 'relative' }} className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${isVisible ? styles.open : ''}`}></div>
      </div>
      <div className={`${styles.sidebar} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.sidebarContent}>
          <ul>
            <li style={{ display: 'flex', gap: '9px' }}>
              <div className={styles.icon} style={{ color: 'white', fontSize: '1.2em' }}>
                <AiOutlineHome />
              </div>
              Dashboard
            </li>
            <li style={{ display: 'flex', gap: '9px' }}>
              <div className={styles.icon}>
                <FaPencilAlt />
              </div>
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
 );
}

export default DashboardSidebar;