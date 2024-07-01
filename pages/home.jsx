export default function Home() {

    const onButtonClick = (e) => {

        let message = document.getElementById('message-elm');
        message.innerHTML = "Checking...";
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(json => {
                message.innerHTML = json.title;
            })
            .catch(err => {
                message.innerHTML = "Failde to load data";
            })

    }

    return (
        <div>
            <h3
                id="message-elm"
                className="text-secondary"
                style={{
                    fontSize: "20px",
                    margin: "15px 0"
                }}>
                Click On Button to get data from jsonplaceholder API
            </h3>
            <button
                type="button" 
                class="btn btn-primary"
                onClick={(e) => onButtonClick}>
                Featch Data From Fake API
            </button>
        </div>
    );
}