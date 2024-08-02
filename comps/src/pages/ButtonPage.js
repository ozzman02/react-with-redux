import Button from "../components/Button"
import { GoBell, GoDatabase } from "react-icons/go";
import { BsCloudDownload } from "react-icons/bs";


export default function ButtonPage() {

    const handleClick = () => {
        //console.log('Clicked !');
    };

    return (
        <div>
            <div>
                <Button secondary outline rounded className="mb-5" onClick={handleClick}>
                    <GoBell />Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <BsCloudDownload />Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoDatabase />See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded>Something!</Button>
            </div>
        </div>
    );
}