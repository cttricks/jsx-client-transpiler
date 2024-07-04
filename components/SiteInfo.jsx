export default function SiteInfo() {

    const handelClicks = (e) => {
        alert('Hello this is site info component');
        console.log(e.target);
    }

    return (
        <div>
            <p>This is <i>SiteInfo</i> page which I have imported on <i>Components</i> page</p>
            <button type="button" className="btn btn-primary" onClick={(e) => handelClicks}>Show hidden message</button>
        </div>
    );
}