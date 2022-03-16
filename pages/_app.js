import "../public/style/global.css";

const FoodApp = ({ Component, pageProps}) => {
    return (
        <div className="max-w-7x1 mx-auto py-40">
            <Component {...pageProps} />
        </div>
    );
}

export default FoodApp;