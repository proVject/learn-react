interface MessageProps {
    text: String;
    isImportant?: boolean
}

const Message = ({text, isImportant = false}: MessageProps) => {
    return (
        <div>
            {
                isImportant
                    ? <h2 style={{ color: 'red' }}>{text}</h2>
                    : <p>{text}</p>
            }
        </div>
    );
};

export default Message;