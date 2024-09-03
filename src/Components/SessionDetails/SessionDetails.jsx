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
                <span className='SessionDetails-icon-fa'>
                <i className="fa-regular fa-calendar"></i>
                </span>
                <span className='SessionDetails-icon-span'>
                    <p>{session.type}</p>
                </span>
            </div>
            <span>
                <h3 className='SessionDetails-title'>{session.title}</h3>
            </span>
            <span>
                <h3 className='SessionDetails-time'>{session.time}</h3>
            </span>
            <div className='SessionDetails-date-location'>
                <span>
                    <h3>{Date().slice(0,15)}</h3>
                </span>
                <span>
                    <p className='SessionDetails-location'>Location:{session.location}</p>
                </span>
            </div>
            <div className='SessionDetails-call-to-action'>
                <hr />
                <button>
                    Call to Action?
                </button>
                <hr />
            </div>
            <div className='SessionDetails-session-info'>
                {session.sessionLeader ? <span>
                    <p className='SessionDetails-session-leader'>Session Leader:</p>
                    <p className='SessionDetails-session-leader-name'><h4>{session.sessionLeader.split(" – ")[0]}</h4>{session.sessionLeader.split(" – ")[1]}</p>
                </span> : null}
                {session.presenters ? <span>
                    <p className='SessionDetails-presenters'>Session Presenters:</p>
                    <p className='SessionDetails-presenters-names'>{session.presenters.map(presenter => <p className='SessionDetails-presenters-names-names'><h4>{presenter.split(" – ")[0]}</h4>{presenter.split(" – ")[1]}</p>)}</p>
                </span> : null}
                <span>
                    <p className='SessionDetails-description'>
                        {!Array.isArray(session.description) 
                            ? session.description 
                            : session.description.map((item, index) => (
                                <div key={index} className="presentation-item">
                                <h3>{item.title}</h3>
                                {item.description && <p>{item.description}</p>}
                                <div className="presenters">
                                    <h3>Presenters:</h3>
                                    <ul>
                                    {item.presenters.map((presenter, presenterIndex) => (
                                        <li key={presenterIndex}>
                                        <strong>{presenter.name}</strong>
                                        {presenter.affiliation && ` - ${presenter.affiliation}`}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                </div>
                            ))
                        }
                        </p>
                </span>
            </div>
        </div>
    </div>
  )
}