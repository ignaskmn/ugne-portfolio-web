import RichText from "..";

const Caption: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
        return (
                <RichText content={content} className={['font-sans', className].filter(Boolean).join(' ')} />
        )
    }

export default Caption