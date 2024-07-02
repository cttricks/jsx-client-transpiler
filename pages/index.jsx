export default function Page() {

    document.title = "Welcome to JSX Client Transpiler";

    return (
        <div>
            <div className="container-fluid h-100">
                <div className="row align-items-start h-25">
                    <div className="col-6 p-4">
                        <a title="View repo on Github" href="https://github.com/cttricks/jsx-client-transpiler" target="_blank" role="button">
                            <img
                                style={{ height: "32px", width: "32px", cursor: "pointer" }}
                                src="/github.png"
                                alt="github-mark"
                            />
                        </a>
                    </div>
                    <div className="col-6 text-right p-4">
                        <a
                            href="./pages/home.jsx"
                            target="#root"
                            role="button"
                            type="button"
                            class="btn btn-outline-secondary poppins-regular"
                            style={{ fontSize: "16px", padding: ".37rem 1.6rem" }}
                        >View Demo App</a>
                    </div>
                </div>
                <div className="row align-items-center h-50">
                    <div className="col-12 text-center text-gray-500">
                        <h1
                            className="poppins-semibold"
                            style={{
                                fontSize: "52px"
                            }}
                        >
                            JSX Client Transpiler
                        </h1>
                        <p className="poppins-regular">To get started, edit <i className="poppins-extralight text-gray-300">pages/index.js</i> and save to reload.</p>
                        <button
                            type="button"
                            class="btn btn-outline-primary poppins-regular mt-4"
                            style={{ fontSize: "14px", padding: ".37rem 1.6rem" }}
                        >
                            Version 1.0.1
                        </button>
                    </div>
                </div>
                <div className="row align-items-end h-25">
                    <div className="col-12 text-center">
                        <p className="poppins-regular mb-4">Developed by <a href="https://www.linkedin.com/in/tanishraj/" target="_blank">tanish</a>, for fun & learning</p>
                    </div>
                </div>
            </div>
        </div>
    );

}