import React from 'react';
import PropTypes from 'prop-types';
import './overlay.css';

const Overlay = ({ eventData }) => {
	return (
		<section className='container'>
			<header className='header'>
				<h1 className='title'>Find Presentations</h1>
				<nav className='tabContainer'>
					<div className='tabItem'>
						<span className='tabText'>Happening Now</span>
						<div className='activeIndicator' />
					</div>
				</nav>
			</header>
			<main className='eventList'>
				<div className='timeBanner'>9:00 AM</div>
				{eventData.map((event, index) => (
					<Event key={index} {...event} />
				))}
			</main>
		</section>
	);
};
Overlay.propTypes = {
	eventData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			time: PropTypes.string.isRequired,
			presenter: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Overlay;

const Event = ({ title, time, presenter, location }) => {
	return (
		<article className='eventWithArrow'>
			<div className='eventBodyAndIcon'>
				<i className='fa-regular fa-calendar'></i>
				<div className='eventCardBody'>
					<h2 className='eventTitle'>{title}</h2>
					<div className='eventCardInfo'>
						<p>{time}</p>
						<p>Presenter: {presenter}</p>
						<p>Location: {location}</p>
					</div>
				</div>
			</div>
			<i className='fa-solid fa-chevron-right'></i>
		</article>
	);
};

Event.propTypes = {
	title: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	presenter: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};
