import classNames from "classnames";

function Skeleton({ times }) {
    /*
        Original implementation to get the boxes:

            const boxes = [];
            for (let i = 0; i < times; i++) { boxes.push(<div key={i} />); }
            return boxes;

        _ means that we do not care that argument.
    */
   const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} />;
   });

   return boxes;
}

export default Skeleton;