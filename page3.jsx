import React from 'react';
import styles from '../CSS/home.module.css';
import Image from 'next/image';
const categoryIcons = [
    {
        id: 1,
        name: 'bed',
        src: '/bed.png',
        alt: 'Accommodation'
    },
    {
        id: 2,
        name: 'landmark',
        src: '/landmark.png',
        alt: 'Landmarks'
    },
    {
        id: 3,
        name: 'beach',
        src: 'beach.png',
        alt: 'Beaches'
    },
    {
        id: 4,
        name: 'food',
        src: '/food.png',
        alt: 'Food & Dining'
    },
    {
        id: 5,
        name: 'house',
        src: '/house.png',
        alt: 'Vacation Homes'
    },
    {
        id: 6,
        name: 'pool',
        src: '/pool.png',
        alt: 'Pools'
    },
    {
        id: 7,
        name: 'hiking',
        src: '/hiking.png',
        alt: 'Hiking'
    },
    {
        id: 8,
        name: 'deals',
        src: '/deals.png',
        alt: 'Special Deals'
    }
];
const CategoryBar = () => {
    return (
        <div className={styles.categoryBar}>
            <div className={styles.categoryScroll}>
                {categoryIcons.map((icon) => (
                    <div key={icon.id} className={styles.categoryItem}>
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            width={24}
                            height={24}
                            className={styles.categoryIcon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const destinations = [
        {
            id: 1,
            location: 'Cape Town, South Africa',
            price: '$113 night',
            rating: 1,
            image: '/Capetown.png'
        },
        {
            id: 2,
            location: 'Sao Paulo, Brazil',
            price: '$80 night',
            rating: 3,
            image: '/Saopaulo.png'
        },
        {
            id: 3,
            location: 'Paris, France',
            price: '$52 night',
            rating: 3,
            image: '/Paris.png'
        },
        {
            id: 4,
            location: 'Cape Town, South Africa',
            price: '$113 night',
            rating: 1,
            image: '/Capetown.png'
        },
        {
            id: 5,
            location: 'Sao Paulo, Brazil',
            price: '$80 night',
            rating: 3,
            image: '/Saopaulo.png'
        },
        {
            id: 6,
            location: 'Paris, France',
            price: '$52 night',
            rating: 3,
            image: '/Paris.png'
        }
    ];
    

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src="/image.png" alt="Login Visual" width={80} height={80} />
                </div>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Search hotels" className={styles.searchInput} />
                    <button className={styles.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>
                <div className={styles.userInfo}>
                    <span>User Name</span>
                    <div className={styles.userAvatar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>
            </header>

            <CategoryBar/>

            <div className={styles.destinationsGrid}>
                {destinations.map((destination) => (
                    <div key={destination.id} className={styles.destinationCard}>
                        <div className={styles.cardImage}>
                            <Image
                                src={destination.image}
                                alt={destination.location}
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5N1EZEAAAAABJRU5ErkJggg=="
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.location}>{destination.location}</h3>
                            <p className={styles.price}>{destination.price}</p>
                            <div className={styles.ratingStars}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < destination.rating ? styles.starFilled : styles.starEmpty}>★</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;