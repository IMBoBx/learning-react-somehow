// Define a LoadingButton component. The button takes loading state, onClick, and label as props then renders the label or loader depending on the loading state.
import React, {useState} from 'react';
import './index.css';

// let loading = false;

const LoadingButton = ({loading, onClick, label}) => {
    return (
        <button onClick={onClick} type="button">
            {
                loading ? <div className="loader" /> : label
            }
        </button>
    );
}

const Conditional = () => {
    const [isLoading, setIsLoading] = useState(false);
    // console.log(isLoading, setIsLoading);
    return(
        <>
            <LoadingButton 
                label={"Click here."}
                loading = {isLoading}
                onClick={() => setIsLoading(!isLoading)}
            />
        </>
    )
}

export default Conditional;