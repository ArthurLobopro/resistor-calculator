export function LineTitle(props: { title: string }) {
    return (
        <div className="line-title">
            <div className="spacer"></div>
            <span className="title">{props.title}</span>
            <div className="spacer"></div>
        </div>
    )
}