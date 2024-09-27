import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from '../Components/NavBar/NavBar';

function Box() {
	const [selected, setSelected] = useState(false);

	return (
		<mesh onClick={() => setSelected(!selected)}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={selected ? 'yellow' : 'hotpink'} />
		</mesh>
	);
}

export default function TEST() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<NavBar />
			<ARCanvas
				onCameraStreamReady={() => console.log('Camera stream ready')}
				onCameraStreamError={() => console.error('Camera stream error')}
				sourceType={'webcam'}
			>
				<ambientLight />
				<pointLight position={[10, 10, 0]} intensity={10.0} />
				<ARMarker
					debug={true}
					params={{ smooth: true }}
					type={'pattern'}
					patternUrl={'data/patt.hiro'}
					onMarkerFound={() => {
						console.log('Marker Found');
					}}
				>
					<Box />
				</ARMarker>
			</ARCanvas>
			<div
				style={{
					position: 'fixed',
					bottom: '20pt',
					left: '20pt',
					right: '20pt',
					backgroundColor: '#ffffffa0',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					borderRadius: '20pt',
				}}
			>
				<p>Point your camera at a marker to see more information about it.</p>
			</div>
		</div>
	);
}
