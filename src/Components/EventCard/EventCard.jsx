import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './EventCard.css';

export default function EventCard({ event }) {
	return (
		<Link to={`/sessions/${event.id}`} className='EventCard-link'>
			<div className='EventCard'>
				<div className='EventCard-time'>
					<p>{event.time}</p>
				</div>
				<div className='EventCard-info'>
					<div className='Event-name'>
						<p>{event.title}:</p>
					</div>
					<div className='EventCard-presenter'>
						<p>Presenter:</p>
						<p>
							{event.presenters &&
							Array.isArray(event.presenters) &&
							event.presenters.length > 0
								? event.presenters[0].split('–')[0]
								: event.sessionLeader
								? event.sessionLeader.split('–')[0]
								: 'N/A'}
						</p>
					</div>
					<div className='EventCard-location'>
						<p>Location:</p>
						<p>{event.location}</p>
					</div>
				</div>
				<div className='EventCard-button'>
					<button>{event.type ? event.type : event.track}</button>
				</div>
			</div>
		</Link>
	);
}

EventCard.propTypes = {
	event: PropTypes.shape({
		id: PropTypes.string.isRequired,
		time: PropTypes.string,
		title: PropTypes.string,
		presenters: PropTypes.arrayOf(PropTypes.string),
		sessionLeader: PropTypes.string,
		location: PropTypes.string,
		type: PropTypes.string,
		track: PropTypes.string,
	}).isRequired,
};
