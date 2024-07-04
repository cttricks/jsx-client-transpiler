export default function Home() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 9) + 1;
    }

    const onButtonClick = (e) => {

        let message = document.getElementById('message-elm');
        message.innerHTML = "Checking...";
        fetch(`https://jsonplaceholder.typicode.com/users/${getRandomNumber()}`)
            .then(response => response.json())
            .then(json => {
                message.innerHTML = `<h1>Hello ${json.name}</h1>${json.email}`;
            })
            .catch(err => {
                message.innerHTML = "Failed to load data";
            })

    };

    document.title = "Demo App - JSX Client Transpiler";

    return (
        <div>
            <div className="container-fluid h-100">
                <div className="row align-items-center h-100">
                    <div className="col-12 text-center poppins-regular">
                        <div
                            id="message-elm"
                            className="text-secondary"
                            style={{
                                fontSize: "20px"
                            }}>Click On Button to Get Random Data
                        </div>
                        <button
                            type="button"
                            class="btn btn-primary mt-4"
                            onClick={(e) => onButtonClick}>
                            Get Random Data
                        </button>
                        <div className="mt-4">Go to <a target="#root" href="./pages/components.jsx">Components Page</a></div>
                    </div>
                </div>

            </div>
        </div>
    );
}