import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "app/App";
import {ErrorBoundary} from "providers/ErrorBoundary";
import {StoreProvider} from "providers/StoreProvider";

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                    <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),

);