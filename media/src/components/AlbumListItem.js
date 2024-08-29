import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

export default function AlbumListItem({ album }) {

    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);   
    };
    
    /* We are using a React Fragment here to inline the button and the album title*/
    const header = (
        <>
            <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
                <GoTrashcan />
            </Button>
            {album.title}
        </>
    );
    
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    );
}