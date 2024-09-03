import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { september28thPresentations } from '../../assets/data'
import "./SessionDetails.css"

export default function SessionDetails() {

    const { id } = useParams()

    const [session, setSession] = useState(september28thPresentations[id - 1])

  return (
    <div className='SessionDetails'>
        <div className='SessionDetails-container'>
            <div className='SessionDetails-icon'>
                <span>
                <i className="fa-regular fa-calendar"></i>
                </span>
            </div>
            <span>
                <p className='SessionDetails-title'>{session.title}</p>
            </span>
            <span>
                <p className='SessionDetails-time'>{session.time}</p>
            </span>
            <span>
                <p>{Date().slice(0,15)}</p>
            </span>
            <span>
                <p className='SessionDetails-location'>{session.location}</p>
            </span>
            <div className='SessionDetails-call-to-action'>
                <hr />
                <button>
                    Call to Action?
                </button>
                <hr />
            </div>
            <span>
                <p className='SessionDetails-session-leader'>Session Leader:</p>
                <p className='SessionDetails-session-leader-name'>{session.sessionLeader.split(" – ")[0]}<br></br>{session.sessionLeader.split(" – ")[1]}</p>
            </span>
            <span>
            <p className="SessionDetails-presenters">Session Presenters: <br></br>{session.presenters ? session.presenters.map(presenter => <p className="Session-info-presenter">{presenter.split(" – ")[0]}<br></br>{presenter.split(" – ")[1]}</p>) : null}</p>
            </span>
            {/* <span>
                <p className='SessionDetails-description'>{session.description}</p>
            </span> */}

        </div>
    </div>
  )
}