import Button from "./Button";
import { GoBell, GoDatabase } from "react-icons/go";
import { BsCloudDownload } from "react-icons/bs";


export default function App() {

    return (
        <div>
            <div>
                <Button className="mb-5" outline>
                    <GoBell />Click me!!
                </Button>
            </div>
            <div>
                <Button danger>
                    <BsCloudDownload />Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />See Deal!
                </Button>
            </div>
            <div>
                <Button secondary>Hide Ads!</Button>
            </div>
            <div>
                <Button primary>Something!</Button>
            </div>
        </div>
    );
}