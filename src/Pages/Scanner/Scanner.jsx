import { ARCanvas, ARMarker } from '@artcom/react-three-arjs/lib/ar';
import NavBar from '../../Components/NavBar/NavBar';
import './Scanner.css';
import { memo, useEffect, useState } from 'react';
import Overlay from '../../Components/overlay/overlay';

const data = [
	{
		title: 'How to Build a React App',
		time: '9:00 AM - 10:00 AM',
		presenter: 'John Doe',
		location: 'Room 101',
	},
	{
		title: 'How to Build a React App',
		time: '9:00 AM - 10:00 AM',
		presenter: 'John Doe',
		location: 'Room 101',
	},
];

export default function Scanner() {
	const [overlayVisible, setOverlayVisible] = useState(false);
	const [markerFound, setMarkerFound] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOverlayVisible(markerFound);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [markerFound]);

	return (
		<div className='Scanner-container'>
			<NavBar />
			<Memars setMarkerFound={setMarkerFound} />
			{overlayVisible && (
				<div className='overlay show'>
					<Overlay eventData={data} />
				</div>
			)}
			{!overlayVisible && (
				<div className='Scanner-message'>
					<p>Point your camera at a Marker to begin.</p>
				</div>
			)}
		</div>
	);
}

function ARS({ setMarkerFound }) {
	return (
		<ARCanvas
			camera={{ position: [0, 0, 0] }}
			onCreated={({ gl }) => {
				gl.setSize(window.innerWidth, window.innerHeight);
			}}
			onCameraStreamReady={() => console.log('Camera stream ready')}
			onCameraStreamError={() => console.error('Camera stream error')}
			sourceType={'webcam'}
		>
			{/* <ambientLight /> */}
			{/* <pointLight position={[10, 10, 0]} intensity={10.0} /> */}
			<ARMarker
				debug={true}
				params={{ smooth: true }}
				type={'pattern'}
				preset='custom'
				patternUrl={'data/marker5.patt'}
				onMarkerFound={() => {
					console.log('Marker Found');
					setMarkerFound(true);
				}}
				onMarkerLost={() => {
					console.log('Marker Lost');
					setMarkerFound(false);
				}}
			></ARMarker>
		</ARCanvas>
	);
}

const Memars = memo(ARS);
