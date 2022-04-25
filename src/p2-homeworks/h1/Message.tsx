import React from 'react'
import css from './Message.module.css'

type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageDataPropsType) {
    return (
        <div className={css.message_post}>
            <div className={css.message_block}>
                <img className={css.message_avatar} src={props.avatar} alt="avatar"/>
                <div className={css.message_message}>
                    <h2 className={css.h2_message}>{props.name}</h2>
                    <p className={css.message_p}>{props.message}
                        <p className={css.message_time}>{props.time}</p>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Message
