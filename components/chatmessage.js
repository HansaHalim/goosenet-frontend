import React from 'react'
import TextPic from '../components/skypify'

class ChatMessage extends React.Component {
    render(){
        return (
            <div className='message' style={{display: 'flex', width: '100vw', margin: "2vh 3vw 2vh 3vw"}}>
                <div className="picColumn" style={{width: '12vw', overflow: 'wrap'}}>
                    <TextPic radius={6} units='vw' string='Ruben Partono' />
                    {/* <img style={{width: '12vw', height: '12vw'}} src="/static/assets/avatar.png" /> */}
                </div>
                <div className="contentColumn" style={{marginLeft: '2vw', width: '78vw'}}>
                    <p style={{margin: '0 0 .5vh 0'}}><b>
                        Ruben Partono
                    </b></p>
                    <p style={{margin: '0'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        )
    }
}

export default ChatMessage