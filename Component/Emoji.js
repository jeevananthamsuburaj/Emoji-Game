import './Emoji.css';
import Btn from "./Btn";
import { useState } from "react";
import im1 from "./Emojis/1.jpg";
import im2 from "./Emojis/2.jpg";
import im3 from "./Emojis/3.jpg";
import im4 from "./Emojis/4.jpg";
import im5 from "./Emojis/5.jpg";
import im6 from "./Emojis/6.jpg";
import im7 from "./Emojis/7.jpg";
import im8 from "./Emojis/8.jpg";
import im9 from "./Emojis/9.jpg";
import im10 from "./Emojis/10.jpg";
import im11 from "./Emojis/11.jpg";
import im12 from "./Emojis/12.jpg";
import winner from "./Emojis/win.gif";
import loser from "./Emojis/lose.gif";




// PopupAlert component
const PopupAlert = ({ message, onClose,img}) => (
    <div className="popup-overlay">
        <div className="popup-content">
            <h2>{message}</h2>
            <img src={img} alt='status' width='250px' height='100px'></img>
            <button style={{
                width: 150, backgroundColor: "darkblue",
                border: "none", color: "white", height: 40,
                 marginLeft: "0px",position:'absolute',top:150,
            }
            }
                className="popup-close-button" onClick={onClose}>Close</button>
        </div>
    </div>
);











const emoji = [im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12];


function shuffle(array) {
    let shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function Emoji() {
    const [toys, setToys] = useState(shuffle(emoji));
    const [clickedEmojis, setClickedEmojis] = useState([]);
    const [lose, setLose] = useState(false);
    const [win, setWin] = useState(false);

    function handleEmojiClick(index) {
        const clickedEmoji = toys[index];
        if (clickedEmojis.includes(clickedEmoji)) {
            setLose(true);
            setToys(shuffle([im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12]));
            setClickedEmojis([]);
        } else {

            console.log(clickedEmojis.length);
            if (clickedEmojis.length === 11) {
                setWin(true);
                setToys(shuffle([im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12]));
                setClickedEmojis([]);
            }
            else {
                setClickedEmojis(prevClicked => [...prevClicked, clickedEmoji]);
                setToys(shuffle(emoji));

            }

        }
    }

    return (
        <>
            <div className='header'>

                <h1>Emoji Game</h1>

            </div>
            <div id="main">

                <div id="box">
                    {toys.map((toy, index) => (
                        <Btn
                            jeep={toy}
                            key={index}
                            i={index}
                            touch={() => handleEmojiClick(index)} // Pass the index properly
                        />
                    ))}


                    {win && (

                        <PopupAlert
                            message="Congratulations! You Win"
                            onClose={() => { setWin(false) } }
                            img={winner}
                        />

                    )}




                    {lose && (

                        <PopupAlert
                            message="You Lose,Emoji touched already!"
                            onClose={() => { setLose(false) } }
                             img={loser} 
                              />

                    )}
                </div>

            </div>


        </>


    );

}

export default Emoji;
