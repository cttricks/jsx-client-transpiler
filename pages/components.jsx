import { SiteInfo } from './components/SiteInfo.jsx';

export default function ComponentsPage() {

    document.title = 'Components Page';

    return (
        <div>
            <div class="container py-4">
                <h1>Welcome to Components Page</h1>
                <SiteInfo />
                <Toast />
                {/* <web-button>Click Me</web-button> */}
            </div>
        </div>
    );
}