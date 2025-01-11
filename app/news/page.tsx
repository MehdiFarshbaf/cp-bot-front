import {appConfig} from "@/config/appConfig";

export default function NEWS() {
    return (
        <main className="w-full flex justify-center items-center flex-col">
            <div className="mainContainer">
                <h1 className="title-page">اخبار و مقالات {appConfig.appNameFa}</h1>
            </div>
        </main>
    );
}
