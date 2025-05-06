import styles from './Message.module.css'

interface MessageProps {
    text: String;
    isImportant?: boolean
}

const Message = ({text, isImportant = false}: MessageProps) => {
    return (
        <div>
            {
                isImportant
                    ? <h2 className={styles.important}>{text}</h2>
                    : <p className={styles.normal}>{text}</p>
            }
        </div>
    );
};

export default Message;